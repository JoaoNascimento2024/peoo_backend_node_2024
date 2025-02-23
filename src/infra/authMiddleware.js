import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Acesso não autorizado, token não fornecido!" });
  }

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido ou expirado!" });
    }

    req.user = user; // Adiciona o usuário ao request
    next(); // Chama a próxima função
  });
};

export default authenticateToken;
