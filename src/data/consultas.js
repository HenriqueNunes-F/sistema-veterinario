const Consulta = require("../models/Consulta");

const consultas = [
  new Consulta(
    1,
    1,
    1,
    "2026-07-07 10:00",
    "Vacinação anual",
    "Pet ativo, sem alterações no exame físico.",
    "Animal saudável"
  ),

  new Consulta(
    2,
    2,
    2,
    "2026-07-08 14:30",
    "Coceira intensa",
    "Tutor relatou coceira há 5 dias.",
    "Suspeita de dermatite alérgica"
  )
];

module.exports = consultas;