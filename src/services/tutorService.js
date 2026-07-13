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


function cadastrarTutor ( id, nome, cpf, telefone, email,endereco) {
  const novoTutor = new Tutor( id, nome, cpf, telefone, email, endereco);

  tutores.push(novoTutor);

  return novoTutor;
}; 


function listarPetsDoTutor(tutorId) { //6. **Listar** os pets de um determinado tutor.
  const tutor = tutores.find((tutor) =>{ // busca os id na array tutores
    return tutor.id === tutorId;  // tutor existe ?
  });
  if (!tutor) { // se existe retorna undefined.
    return undefined; 
  }

  return pets.filter((pet) => {
    return pet.tutorId === tutorId;
  });
}

function buscarPetsPeloNomeDoTutor ( nome) { // dado o nome de um tutor, mostrar os pets dele ( pedido extra )
  const tutor = tutores.find((tutor) => {  // acho o tutor pelo nome
 
    return tutor.nome === nome;  
  });

  if (!tutor) {
    return undefined;
  }

  return pets.filter((pet) => { // acho os pet pelo id do tutor.

    return pet.tutorId === tutor.id;
  });
  
}

module.exports = {
  listarTutores,
  buscarTutorPorId,
  listarPetsDoTutor,
  buscarPetsPeloNomeDoTutor,
  cadastrarTutor
};

