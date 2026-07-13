const test = require("node:test");
const assert = require("node:assert/strict");

const pet = require("../src/models/Pet");

const petService = require("../src/services/petService");


test("deve existir uma função chamada hhhhh no petService", () => {
  assert.equal(typeof petService.buscarPetPorNome, "function");
});