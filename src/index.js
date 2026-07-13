const tutorService = require("./services/tutorService");
const petService = require("./services/petService");
const veterinarioService = require("./services/veterinarioService");
const consultaService = require("./services/consultaService");

console.log("=== Sistema Veterinário ===");

// Listagens iniciais
console.log("\nTutores cadastrados:");
console.log(tutorService.listarTutores());

console.log("\nPets cadastrados:");
console.log(petService.listarPets());

console.log("\nPets com seus tutores:");
console.log(petService.listarPetsComTutor());

console.log("\nVeterinários cadastrados:");
console.log(veterinarioService.listarVeterinarios());

console.log("\nValor total da consulta 1:");
console.log(consultaService.calcularValorTotalDaConsulta(1));

// Cadastros
console.log("\nCadastrando novo tutor:");

const novoTutor = tutorService.cadastrarTutor(
  3,
  "João Pereira",
  "111.222.333-44",
  "(41) 97777-3333",
  "joao@email.com",
  "Rua Nova, 300"
);

console.log(novoTutor);

console.log("\nTutores após cadastro:");
console.log(tutorService.listarTutores());

console.log("\nCadastrando novo pet:");

const novoPet = petService.cadastrarPet(
  4,
  "Mel",
  "Cachorro",
  "Poodle",
  "2022-03-15",
  6.8,
  "Fêmea",
  1
);

if (!novoPet) {
  console.log("Tutor não encontrado. Pet não cadastrado");
} else {
  console.log(novoPet);
}

console.log("\nPets após cadastro:");
console.log(petService.listarPets());

console.log("\nCadastrando novo veterinário:");

const novoVeterinario = veterinarioService.cadastrarVeterinario(
  3,
  "Dra. Beatriz Alves",
  "CRMV-PR 55555",
  "Ortopedia veterinária"
);

console.log(novoVeterinario);

console.log("\nVeterinários após cadastro:");
console.log(veterinarioService.listarVeterinarios());

// Registro de consulta
console.log("\nRegistrando nova consulta:");

const resultadoConsulta = consultaService.registrarConsulta(
  3,
  4,
  2,
  "2026-07-09 09:00",
  "Avaliação ortopédica",
  "Pet apresentou dificuldade para apoiar a pata traseira.",
  "Suspeita de lesão muscular"
);

if (!resultadoConsulta.sucesso) {
  console.log("Consulta não registrada:");
  console.log(resultadoConsulta.mensagens);
} else {
  console.log(resultadoConsulta.mensagens);
  console.log(resultadoConsulta.consulta);
}

console.log("\nConsultas após registro:");
console.log(consultaService.listarConsultas());

// Ações da consulta
console.log("\nAdicionando ação na consulta 3:");

const resultadoAcao = consultaService.adicionarAcaoNaConsulta(
  5,
  3,
  "Avaliação ortopédica completa",
  "Exame",
  180
);

if (!resultadoAcao.sucesso) {
  console.log("Ação não adicionada:");
  console.log(resultadoAcao.mensagens);
} else {
  console.log(resultadoAcao.mensagens);
  console.log(resultadoAcao.acao);
}

console.log("\nAções da consulta 3:");
console.log(consultaService.listarAcoesDaConsulta(3));

console.log("\nValor total da consulta 3:");
console.log(consultaService.calcularValorTotalDaConsulta(3));

// Histórico do pet
console.log("\nHistórico do pet 4:");

const historicoPet = consultaService.listarHistoricoDoPet(4);

if (!historicoPet) {
  console.log("Pet não encontrado");
} else {
  console.dir(historicoPet, { depth: null });
}

// Buscas por tutor
console.log("\nPets do tutor 1:");

const petsDoTutor = tutorService.listarPetsDoTutor(1);

if (!petsDoTutor) {
  console.log("Tutor não encontrado");
} else {
  console.log(petsDoTutor);
}

console.log("\nPets pelo nome do tutor: Ana Souza");

const petsPeloNomeDoTutor = tutorService.buscarPetsPeloNomeDoTutor("Ana Souza");

if (!petsPeloNomeDoTutor) {
  console.log("Tutor não encontrado");
} else {
  console.log(petsPeloNomeDoTutor);
}

// Resumo de atendimentos
console.log("\nResumo de atendimentos por veterinário:");
console.log(veterinarioService.listarResumoDeAtendimentos());
