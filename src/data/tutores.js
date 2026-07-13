const Tutor = require("../models/Tutor");

const tutores = [
  new Tutor(
    1,
    "Ana Souza",
    "123.456.789-00",
    "(41) 99999-1111",
    "ana.souza@email.com",
    "Rua das Flores, 100"
  ),

  new Tutor(
    2,
    "Carlos Lima",
    "987.654.321-00",
    "(41) 98888-2222",
    "carlos.lima@email.com",
    "Av. Central, 250"
  )
];

module.exports = tutores;