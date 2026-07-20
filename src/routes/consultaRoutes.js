const express = require("express");
const consultaService = require("../services/consultaService");

const router = express.Router();

router.get("/", (req, res) => { // lista todas as consultas
  const consultas = consultaService.listarConsultas();

  return res.status(200).json(consultas);
});

router.get("/:id", (req, res) => { // busca uma consulta pelo id
  const id = Number(req.params.id);
  const consulta = consultaService.buscarConsultaPorId(id);

  if (!consulta) {
    return res.status(404).json({ mensagem: "Consulta nao encontrada" });
  }

  return res.status(200).json(consulta);
});

router.post("/", (req, res) => { // registra uma nova consulta
  const dados = req.body;

  const resultadoConsulta = consultaService.registrarConsulta(
    dados.id,
    dados.petId,
    dados.veterinarioId,
    dados.dataHora,
    dados.motivo,
    dados.observacoes,
    dados.diagnostico
  );

  if (!resultadoConsulta.sucesso) {
    return res.status(400).json({
      mensagens: resultadoConsulta.mensagens
    });
  }

  return res.status(201).json(resultadoConsulta.consulta);
});

module.exports = router;
