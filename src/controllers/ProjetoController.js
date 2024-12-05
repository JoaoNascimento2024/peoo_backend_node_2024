import ProjetoRepository from "../repositories/ProjetoRepository.js";

const ProjetoController = {

    async getAll(req, res){
        try {
            const projetos = await ProjetoRepository.findAll();
            res.json(projetos);
        }catch(err){
            res.status(500).json({error : "Erro na busca de projetos", err});
        }
    },

    async create(req, res) {
        const {nome} = req.body;
        try {
            const novoProjeto = {nome};
            const projetoCriado = await ProjetoRepository.createProject(novoProjeto);
            res.status(201).json(projetoCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de projetos", err});
        }
    }

}

export default ProjetoController;