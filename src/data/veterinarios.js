const Veterinario = require("../models/Veterinario");  // importando o molde veterinario

const veterinarios = [    
  new Veterinario( //  crie um novo veterinario usando a classe veterinario
    1,      
    "Dra. Mariana Costa",
    "CRMV-PR 12345",
    "Clínica geral"
  ),

  new Veterinario(
    2,
    "Dr. Felipe Rocha",
    "CRMV-PR 67890",
    "Dermatologia veterinária"
  )
];

module.exports = veterinarios;