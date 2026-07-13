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
module.exports = {
  listarTutores,
  buscarTutorPorId,
  listarPetsDoTutor,
  buscarTutorPeloNome,
  cadastrarTutor
};
