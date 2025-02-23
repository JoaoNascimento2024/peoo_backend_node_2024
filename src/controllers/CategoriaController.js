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
    },

    async delete(req, res) {
        const {id} = req.params;
        try {
            const resposta = await CategoriaRepository.deleteCategoria(id);
            res.status(200).json(resposta);
        }catch(err){
            res.status(500).json({error : "Erro na exclusão de categorias", err});
        }
    },

    async update(req, res) {
        const {id} = req.params;
        const {nome} = req.body;
        const categoria = {id, nome}
        try {
            const resposta = await CategoriaRepository.updateCategoria(categoria);
            res.status(200).json(resposta);
        }catch(err){
            res.status(500).json({error : "Erro na exclusão de categorias", err});
        }
    }

}

export default CategoriaController;