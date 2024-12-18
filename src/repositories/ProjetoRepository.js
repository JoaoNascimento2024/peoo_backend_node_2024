import Projeto from "../models/Projeto.js";
import DBInterface from "../config/dbInterface.js";
import connection from "../config/dbConnect.js";

const ProjetoRepository = {

    async findAll() {
        const rows = await connection.query("select * from projeto", []);
        return rows.map(row => new Projeto(row.id, row.nome));
    },

    async createProject(projeto){
        const result = await connection.query("insert into projeto (nome) values (?)",
            [projeto.nome]
        );
        projeto.id = result.insertId;
        return projeto;
    }
}

export default ProjetoRepository;