const pets = require("../data/pets");
const tutores = require("../data/tutores");

function listarPets() {
  return pets;
}

function buscarPetPorId(id) {
  return pets.find((pet) => {
    return pet.id === id;
  });
}

function listarPetsPorTutorId(tutorId) {
  return pets.filter((pet) => {
    return pet.tutorId === tutorId;
  });
}

function buscarPetPorNome(nome) {
  return pets.find((pet) => {
    return pet.nome === nome;
  });
}

function listarPetsComTutor() {
  return pets.map((pet) => {
    const tutor = tutores.find((tutor) => {
      return tutor.id === pet.tutorId;
    });

    return {
      id: pet.id,
      nome: pet.nome,
      especie: pet.especie,
      raca: pet.raca,
      tutor: tutor ? tutor.nome : "Tutor não encontrado"
    };
  });
}

module.exports = {
  listarPets,
  buscarPetPorId,
  listarPetsPorTutorId,
  buscarPetPorNome,
  listarPetsComTutor
};
