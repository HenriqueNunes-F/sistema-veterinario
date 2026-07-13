class Consulta {
  
  constructor(id, petId, veterinarioId, dataHora, motivo, observacoes, diagnostico) {
    this.id = id;
    this.petId = petId;
    this.veterinarioId = veterinarioId;
    this.dataHora = dataHora;
    this.motivo = motivo;
    this.observacoes = observacoes;
    this.diagnostico = diagnostico;
  }
}

module.exports = Consulta;