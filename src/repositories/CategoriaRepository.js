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
    }
}

export default CategoriaRepository;