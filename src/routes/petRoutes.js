const express = require("express");
const petService = require("../services/petService");

const router = express.Router();

router.get("/", (req, res) => { // lista todos os pets
  const pets = petService.listarPets();

  return res.status(200).json(pets);
});

router.get("/:id", (req, res) => { // busca um pet pelo id
  const id = Number(req.params.id);
  const pet = petService.buscarPetPorId(id);

  if (!pet) {
    return res.status(404).json({ mensagem: "Pet nao encontrado" });
  }

  return res.status(200).json(pet);
});

router.post("/", (req, res) => { // cadastra um novo pet
  const dados = req.body;

  const novoPet = petService.cadastrarPet(
    dados.id,
    dados.nome,
    dados.especie,
    dados.raca,
    dados.dataNascimento,
    dados.peso,
    dados.sexo,
    dados.tutorId
  );

  if (!novoPet) {
    return res.status(400).json({
      mensagem: "Tutor nao encontrado. Pet nao cadastrado"
    });
  }

  return res.status(201).json(novoPet);
});

router.patch("/:id", (req, res) => { // atualiza parte dos dados de um pet
  const id = Number(req.params.id);
  const dados = req.body;

  const petAtualizado = petService.atualizarPet(id, dados);

  if (!petAtualizado) {
    return res.status(404).json({ mensagem: "Pet nao encontrado" });
  }

  return res.status(200).json(petAtualizado);
});

router.delete("/:id", (req, res) => { // remove um pet pelo id
  const id = Number(req.params.id);

  const petRemovido = petService.removerPet(id);

  if (!petRemovido) {
    return res.status(404).json({ mensagem: "Pet nao encontrado" });
  }

  return res.status(200).json({
    mensagem: "Pet removido com sucesso",
    pet: petRemovido
  });
});

module.exports = router;