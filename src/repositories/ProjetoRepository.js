import Projeto from "../models/Projeto.js";
import DBInterface from "../config/dbInterface.js";
import connection from "../config/dbConnect.js";

const ProjetoRepository = {

    async findAll() {
        const rows = await connection.query("select projeto.id, projeto.nome as nome_projeto, categoria.id as categoria_id, categoria.nome as nome_categoria from projeto inner join categoria on categoria.id = projeto.categoria_id", []);
        return rows.map(row => new Projeto(row.id, row.nome_projeto, {id: row.categoria_id, nome: row.nome_categoria}));
    },

    async createProject(projeto){
        const result = await connection.query("insert into projeto (nome, categoria_id) values (?, ?)",
            [projeto.nome, projeto.categoria]
        );
        projeto.id = result.insertId;
        return projeto;
    },

    async deleteProject(id){
        const result = await connection.query("delete from projeto where id = ?", [id]);
        if(result.affectedRows > 0){
            return true;
        }
        return false;
    },

    async updateProject(projeto){
        const result = await connection.query("update projeto set nome = ?, categoria_id = ? where id = ?",
            [projeto.nome, projeto.categoria, projeto.id]
        );
        if(result.affectedRows > 0){
            return projeto;
        }
        return null;
    }
}

export default ProjetoRepository;