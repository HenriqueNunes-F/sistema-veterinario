const express = require("express");
const veterinarioService = require("../services/veterinarioService");

const router = express.Router();

router.get("/", (req, res) => { // lista todos os veterinarios
  const veterinarios = veterinarioService.listarVeterinarios();

  return res.status(200).json(veterinarios);
});

router.get("/:id", (req, res) => { // busca um veterinario pelo id
  const id = Number(req.params.id);
  const veterinario = veterinarioService.buscarVeterinarioPorId(id);

  if (!veterinario) {
    return res.status(404).json({ mensagem: "Veterinario nao encontrado" });
  }

  return res.status(200).json(veterinario);
});

router.post("/", (req, res) => { // cadastra um novo veterinario
  const dados = req.body;

  const novoVeterinario = veterinarioService.cadastrarVeterinario(
    dados.id,
    dados.nome,
    dados.crmv,
    dados.especialidade
  );

  return res.status(201).json(novoVeterinario);
});

module.exports = router;
