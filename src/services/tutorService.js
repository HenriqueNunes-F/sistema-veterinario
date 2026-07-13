const tutores = require("../data/tutores");
const pets = require("../data/pets");
const Tutor = require("../models/Tutor");

function listarTutores() { // listar todos os tutores cadastrados para analise.
  return tutores;
}

function buscarTutorPorId(id) { // um tutor tem muitos pets, todo pet pertence a um tutor 
  return tutores.find((tutor) => {
    return tutor.id === id;
  });
}

function listarPetsDoTutor(tutorId) { // 6.Listar os pets de um determinado tutor.
  return pets.filter((pet) => {
    return pet.tutorId === tutorId;
  });
}

function buscarTutorPeloNome(nome) {  // pedido extra, buscar pet pelo nome do tutor.
   
  return tutores.find((tutor) => {
    return tutor.nome === nome;
  });
  
}

function cadastrarTutor ( id, nome, cpf, telefone, email,endereco) {
  const novoTutor = new Tutor( id, nome, cpf, telefone, email, endereco);

  tutores.push(novoTutor);

  return novoTutor;
}; 

module.exports = {
  listarTutores,
  buscarTutorPorId,
  listarPetsDoTutor,
  buscarTutorPeloNome,
  cadastrarTutor
};
