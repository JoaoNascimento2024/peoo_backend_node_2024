import Usuario from "../models/Usuario.js";
import connection from "../config/dbConnect.js";

const LoginRepository = {

    async find(nome) {
        const rows = await connection.query("select * from usuario where nome = ?", [nome]);
        if(rows.length > 0){
            return new Usuario(rows[0].id, rows[0].nome, rows[0].senha);
        }
        return null;
    },

    async create(usuario){
        const result = await connection.query("insert into usuario (nome, senha) values (?, ?)",
            [usuario.nome, usuario.senha]
        );
        usuario.id = result.insertId;
        return usuario;
    }

}

export default LoginRepository;