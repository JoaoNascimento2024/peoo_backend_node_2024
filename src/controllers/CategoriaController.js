import CategoriaRepository from "../repositories/CategoriaRepository.js";

const CategoriaController = {

    async getAll(req, res){
        try {
            const categorias = await CategoriaRepository.findAll();
            res.json(categorias);
        }catch(err){
            res.status(500).json({error : "Erro na busca de categorias", err});
        }
    },

    async create(req, res) {
        const {nome} = req.body;
        try {
            const novaCategoria = {nome};
            const categoriaCriada = await CategoriaRepository.createCategoria(novaCategoria);
            res.status(201).json(categoriaCriada);
        }catch(err){
            res.status(500).json({error : "Erro na criação de categorias", err});
        }
    }

}

export default CategoriaController;