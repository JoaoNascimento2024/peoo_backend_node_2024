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
        const {nome, categoria} = req.body;
        try {
            const novoProjeto = {nome, categoria};
            const projetoCriado = await ProjetoRepository.createProject(novoProjeto);
            res.status(201).json(projetoCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de projetos", err});
        }
    },

    async delete(req, res) {
        const {id} = req.params;
        try {
            const resposta = await ProjetoRepository.deleteProject(id);
            res.status(200).json(resposta);
        }catch(err){
            res.status(500).json({error : "Erro na exclusão de projetos", err});
        }
    },

    async update(req, res) {
        const {id} = req.params;
        const {nome, categoria} = req.body;
        const projeto = {id, nome, categoria}
        try {
            const resposta = await ProjetoRepository.updateProject(projeto);
            res.status(200).json(resposta);
        }catch(err){
            res.status(500).json({error : "Erro na exclusão de projetos", err});
        }
    }

}

export default ProjetoController;