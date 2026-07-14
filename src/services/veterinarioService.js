const veterinarios = require("../data/veterinarios");
const consultas = require("../data/consultas");
const Veterinario = require("../models/Veterinario");

function listarVeterinarios() {
  return veterinarios;
}

function buscarVeterinarioPorId(id) {
  return veterinarios.find((veterinario) => {
    return veterinario.id === id;
  });
}

function contarConsultasPorVeterinario(veterinarioId) { // conta quantas consultas um veterinário atendeu
  const consultasDoVeterinario = consultas.filter((consulta) => {
    return consulta.veterinarioId === veterinarioId;
  });

  return consultasDoVeterinario.length;
}

function listarResumoDeAtendimentos() { // lista veterinários com total de consultas atendidas
  return veterinarios.map((veterinario) => {
    return {
      id: veterinario.id,
      nome: veterinario.nome,
      especialidade: veterinario.especialidade,
      totalConsultas: contarConsultasPorVeterinario(veterinario.id)
    };
  });
}

function cadastrarVeterinario(id, nome, crmv, especialidade) { // validação: ainda não valida duplicidade; cria veterinário direto
  const novoVeterinario = new Veterinario(id, nome, crmv, especialidade);

  veterinarios.push(novoVeterinario);

  return novoVeterinario;
}

module.exports = {
  listarVeterinarios,
  buscarVeterinarioPorId,
  contarConsultasPorVeterinario,
  listarResumoDeAtendimentos,
  cadastrarVeterinario
};
