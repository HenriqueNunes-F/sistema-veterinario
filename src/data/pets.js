const Pet = require("../models/Pet");

const pets = [
  new Pet(
    1,
    "Thor",
    "Cachorro",
    "Golden Retriever",
    "2020-04-10",
    31.5,
    "Macho",
    1
  ),

  new Pet(
    2,
    "Luna",
    "Gato",
    "Siamês",
    "2021-08-22",
    4.2,
    "Fêmea",
    1
  ),

  new Pet(
    3,
    "Bob",
    "Cachorro",
    "Vira-lata",
    "2019-02-15",
    18.7,
    "Macho",
    2
  )
];

module.exports = pets;