const Acao = require("../models/Acao");

const acoes = [
  new Acao(
    1,
    1,
    "Aplicação de vacina V10",
    "Vacina",
    120
  ),

  new Acao(
    2,
    1,
    "Avaliação clínica geral",
    "Exame",
    80
  ),

  new Acao(
    3,
    2,
    "Exame dermatológico",
    "Exame",
    150
  ),

  new Acao(
    4,
    2,
    "Prescrição de medicação antialérgica",
    "Medicação",
    60
  )
];

module.exports = acoes;