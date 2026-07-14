class Pet { // Pet guarda tutorId.
  constructor(id, nome, especie, raca, dataNascimento, peso, sexo, tutorId) {
    this.id = id;
    this.nome = nome;
    this.especie = especie;
    this.raca = raca;
    this.dataNascimento = dataNascimento;
    this.peso = peso;
    this.sexo = sexo;
    this.tutorId = tutorId;
  }
}

module.exports = Pet;