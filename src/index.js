const tutorService = require("./services/tutorService");
const petService = require("./services/petService");
const veterinarioService = require("./services/veterinarioService");
const consultaService = require("./services/consultaService");

console.log("=== Sistema Veterinário ===");

console.log("\nTutores cadastrados:");
console.log(tutorService.listarTutores());

console.log("\nPets cadastrados:");
console.log(petService.listarPets());

console.log("\nPets com seus tutores:");
console.log(petService.listarPetsComTutor());

console.log("\nPets do tutor 1:");
console.log(tutorService.listarPetsDoTutor(1));

console.log("\nVeterinários cadastrados:");
console.log(veterinarioService.listarVeterinarios());

console.log("\nResumo de atendimentos por veterinário:");
console.log(veterinarioService.listarResumoDeAtendimentos());

console.log("\nHistórico do pet 1:");
const historicoPet = consultaService.listarHistoricoDoPet(1);

if (!historicoPet) {
  console.log("Pet não encontrado");
} else {
  console.log(historicoPet);
}

console.log("\nValor total da consulta 1:");
console.log(consultaService.calcularValorTotalDaConsulta(1));
