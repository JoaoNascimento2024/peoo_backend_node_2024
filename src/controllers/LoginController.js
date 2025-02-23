import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import LoginRepository from "../repositories/LoginRepository.js";

const LoginController = {
  async login(req, res) {
    const { nome, senha } = req.body;

    try {
      // Buscar usuário no banco
      const usuario = await LoginRepository.find(nome);

      if (!usuario) {
        return res.status(401).json({ message: "Credenciais inválidas" });
      }

      // Comparar senha digitada com a senha criptografada armazenada
      const senhaCorreta = await bcrypt.compare(senha, usuario._senha);

      if (!senhaCorreta) {
        return res.status(401).json({ message: "Credenciais inválidas" });
      }

      // Dados que você deseja incluir no token
      const payload = {
        nome: usuario.nome,
        id: usuario.id,
      };

      // Gera o token
      const token = jwt.sign(payload, process.env.SECRET, {
        expiresIn: "1h", // Token expira em 1 hora
      });

      // Retorna o token para o cliente
      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: "Erro no login", error: error.message });
    }
  },

  async cadastrarUsuario(req, res) {
    const { nome, senha } = req.body;

    try {
      // Gerar hash da senha antes de salvar no banco
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(senha, saltRounds);

      // Criar usuário no banco com a senha criptografada
      const novoUsuario = await LoginRepository.create({
        nome,
        senha: hashedPassword,
      });

      res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao cadastrar usuário", error: error.message });
    }
  },
};

export default LoginController;
