class Acao { // Acao guarda consultaId.
  
  constructor(id, consultaId, descricao, tipo, valor) {
    this.id = id;
    this.consultaId = consultaId;
    this.descricao = descricao;
    this.tipo = tipo;
    this.valor = valor;
  }
}

module.exports = Acao;


