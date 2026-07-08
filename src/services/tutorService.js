const tutores = require("../data/tutores");
const pets = require("../data/pets");

function listarTutores() {
  return tutores;
}

function buscarTutorPorId(id) {
  return tutores.find((tutor) => {
    return tutor.id === id;
  });
}

function listarPetsDoTutor(tutorId) {
  return pets.filter((pet) => {
    return pet.tutorId === tutorId;
  });
}

function buscarTutorPeloNome(nome) {
  return tutores.find((tutor) => {
    return tutor.nome === nome;
  });
}

module.exports = {
  listarTutores,
  buscarTutorPorId,
  listarPetsDoTutor,
  buscarTutorPeloNome
};
