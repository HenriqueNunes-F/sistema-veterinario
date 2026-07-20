const express = require("express");
const tutorService = require("../services/tutorService");

const router = express.Router();

router.get("/", (req, res) => { // lista todos os tutores
  const tutores = tutorService.listarTutores();

  return res.status(200).json(tutores);
});

router.get("/:id", (req, res) => { // busca um tutor pelo id
  const id = Number(req.params.id);
  const tutor = tutorService.buscarTutorPorId(id);

  if (!tutor) {
    return res.status(404).json({ mensagem: "Tutor nao encontrado" });
  }

  return res.status(200).json(tutor);
});

router.post("/", (req, res) => { // cadastra um novo tutor
  const dados = req.body;

  const novoTutor = tutorService.cadastrarTutor(
    dados.id,
    dados.nome,
    dados.cpf,
    dados.telefone,
    dados.email,
    dados.endereco
  );

  return res.status(201).json(novoTutor);
});

module.exports = router;
