const tutores = require("../data/tutores");
const pets = require("../data/pets");
const Tutor = require("../models/Tutor");

function listarTutores() { // lista todos os tutores cadastrados
  return tutores;
}

function buscarTutorPorId(id) {
  return tutores.find((tutor) => {
    return tutor.id === id;
  });
}

function cadastrarTutor(id, nome, cpf, telefone, email, endereco) { // validação: ainda não valida duplicidade; cria tutor direto
  const novoTutor = new Tutor(id, nome, cpf, telefone, email, endereco);

  tutores.push(novoTutor);

  return novoTutor;
}

function listarPetsDoTutor(tutorId) { // lista os pets vinculados a um tutor
  const tutor = tutores.find((tutor) => {
    return tutor.id === tutorId;
  });

  if (!tutor) {
    return undefined;
  }

  return pets.filter((pet) => {
    return pet.tutorId === tutorId;
  });
}

function buscarPetsPeloNomeDoTutor(nome) { // busca pets pelo nome do tutor
  const tutor = tutores.find((tutor) => {
    return tutor.nome === nome;
  });

  if (!tutor) {
    return undefined;
  }

  return pets.filter((pet) => {
    return pet.tutorId === tutor.id;
  });
}

module.exports = {
  listarTutores,
  buscarTutorPorId,
  cadastrarTutor,
  listarPetsDoTutor,
  buscarPetsPeloNomeDoTutor
};
