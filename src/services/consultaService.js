const consultas = require("../data/consultas");
const acoes = require("../data/acoes");
const pets = require("../data/pets");
const veterinarios = require("../data/veterinarios");

function listarConsultas() {
  return consultas;
}

function buscarConsultaPorId(id) {
  return consultas.find((consulta) => {
    return consulta.id === id;
  });
}

function listarConsultasPorPetId(petId) {
  return consultas.filter((consulta) => {
    return consulta.petId === petId;
  });
}

function listarAcoesDaConsulta(consultaId) {
  return acoes.filter((acao) => {
    return acao.consultaId === consultaId;
  });
}

function calcularValorTotalDaConsulta(consultaId) {
  const acoesDaConsulta = listarAcoesDaConsulta(consultaId);

  const total = acoesDaConsulta.reduce((total, acao) => {
    return total + acao.valor;
  }, 0);

  return total;
}

function listarHistoricoDoPet(petId) {
  const pet = pets.find((pet) => {
    return pet.id === petId;
  });

  if (!pet) {
    return undefined;
  }

  const consultasDoPet = consultas.filter((consulta) => {
    return consulta.petId === petId;
  });

  const historico = consultasDoPet.map((consulta) => {
    const veterinario = veterinarios.find((veterinario) => {
      return veterinario.id === consulta.veterinarioId;
    });

    return {
      consultaId: consulta.id,
      pet: pet.nome,
      dataHora: consulta.dataHora,
      motivo: consulta.motivo,
      diagnostico: consulta.diagnostico,
      veterinario: veterinario ? veterinario.nome : "Veterinário não encontrado",
      acoes: listarAcoesDaConsulta(consulta.id),
      valorTotal: calcularValorTotalDaConsulta(consulta.id)
    };
  });

  return historico;
}

module.exports = {
  listarConsultas,
  buscarConsultaPorId,
  listarConsultasPorPetId,
  listarAcoesDaConsulta,
  calcularValorTotalDaConsulta,
  listarHistoricoDoPet
};
