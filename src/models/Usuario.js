class Usuario {
  constructor(id, nome, senha) {
    this._id = id;
    this._nome = nome;
    this._senha = senha;
  }
  setId(id) {
    this._id = id;
  }
  setNome(nome) {
    this._nome = nome;
  }
  setSenha(senha) {
    this._senha = senha;
  }
  getId() {
    return this._id;
  }
  getNome() {
    return this._nome;
  }
  getSenha() {
    return this._senha;
  }
}
export default Usuario;
