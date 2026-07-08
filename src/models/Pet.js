class pet {
    constructor (id, tutorId, nome, especie, raca, dataNascimento, peso, sexo){

        this.id = id;
        this.tutorId = tutorId;
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.dataNascimento = dataNascimento;
        this.peso = peso;
        this.sexo = sexo;
    }
}


module.exports = pet;