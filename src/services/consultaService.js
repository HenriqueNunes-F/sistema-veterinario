const consultas = require("../data/consultas");
const acoes = require("../data/acoes");
const pets = require("../data/pets");
const veterinarios = require("../data/veterinarios");
const Consulta = require("../models/Consulta");
const Acao = require("../models/Acao");

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

function registrarConsulta(id, petId, veterinarioId, dataHora, motivo, observacoes, diagnostico) {
  const petExiste = pets.find((pet) => {
    return pet.id === petId;
  });

  const veterinarioExiste = veterinarios.find((veterinario) => {
    return veterinario.id === veterinarioId;
  });

  const mensagens = [];

  if (!petExiste) {
    mensagens.push("Pet não encontrado");
  }

  if (!veterinarioExiste) {
    mensagens.push("Veterinário não encontrado");
  }

  if (mensagens.length > 0) {
    return {
      sucesso: false,
      mensagens: mensagens,
      consulta: null
    };
  }

  const novaConsulta = new Consulta(
    id,
    petId,
    veterinarioId,
    dataHora,
    motivo,
    observacoes,
    diagnostico
  );

  consultas.push(novaConsulta);

  return {
    sucesso: true,
    mensagens: ["Consulta registrada com sucesso"],
    consulta: novaConsulta
  };
}

function adicionarAcaoNaConsulta(id, consultaId, descricao, tipo, valor) {
  const consultaExiste = consultas.find((consulta) => {
    return consulta.id === consultaId;
  });

  if (!consultaExiste) {
    return {
      sucesso: false,
      mensagens: ["Consulta não encontrada"],
      acao: null
    };
  }

  const novaAcao = new Acao(
    id,
    consultaId,
    descricao,
    tipo,
    valor
  );

  acoes.push(novaAcao);

  return {
    sucesso: true,
    mensagens: ["Ação adicionada com sucesso"],
    acao: novaAcao
  };
}

module.exports = {
  listarConsultas,
  buscarConsultaPorId,
  listarConsultasPorPetId,
  listarAcoesDaConsulta,
  calcularValorTotalDaConsulta,
  listarHistoricoDoPet,
  registrarConsulta,
  adicionarAcaoNaConsulta
};
