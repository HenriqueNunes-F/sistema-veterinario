const pets = require("../data/pets");
const tutores = require("../data/tutores");
const Pet = require("../models/Pet");

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

function cadastrarPet(id, nome, especie, raca, dataNascimento, peso, sexo, tutorId) { // validação: só cria o pet se o tutor existir
  const tutorExiste = tutores.find((tutor) => {
    return tutor.id === tutorId;
  });

  if (!tutorExiste) {
    return null;
  }

  const novoPet = new Pet(
    id,
    nome,
    especie,
    raca,
    dataNascimento,
    peso,
    sexo,
    tutorId
  );

  pets.push(novoPet);

  return novoPet;
}

module.exports = {
  listarPets,
  buscarPetPorId,
  listarPetsPorTutorId,
  buscarPetPorNome,
  listarPetsComTutor,
  cadastrarPet
};
