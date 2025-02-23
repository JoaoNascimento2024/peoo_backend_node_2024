import Categoria from "../models/Categoria.js";
import connection from "../config/dbConnect.js";

const CategoriaRepository = {

    async findAll() {
        const rows = await connection.query("select * from categoria", []);
        return rows.map(row => new Categoria(row.id, row.nome));
    },

    async createCategoria(categoria){
        const result = await connection.query("insert into categoria (nome) values (?)",
            [categoria.nome]
        );
        categoria.id = result.insertId;
        return categoria;
    },

    async deleteCategoria(id){
        const result = await connection.query("delete from categoria where id = ?", [id]);
        if(result.affectedRows > 0){
            return true;
        }
        return false;
    },

    async updateCategoria(categoria){
        const result = await connection.query("update categoria set nome = ? where id = ?",
            [categoria.nome, categoria.id]
        );
        if(result.affectedRows > 0){
            return categoria;
        }
        return null;
    }
}

export default CategoriaRepository;