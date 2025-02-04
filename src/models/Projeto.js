
class Projeto {
    constructor(id, nome, categoria){
        this._id = id;
        this._nome = nome;
        this._categoria = {_id : categoria.id, _nome : categoria.nome}
    }

    setId(id){
        this._id = id;
    }

    setNome(nome){
        this._nome = nome;
    }

    getId(){
        return this._id;
    }

    getNome(){
        return this._nome;
    }

}

export default Projeto;