const test = require("node:test");
const assert = require("node:assert/strict");

const Acao = require("../src/models/Acao");

test("deve criar uma ação corretamente", () => {
  const acao = new Acao(
    1,
    1,
    "Aplicação de vacina V10",
    "Vacina",
    120
  );

  assert.equal(acao.id, 1);
  assert.equal(acao.consultaId, 1);
  assert.equal(acao.descricao, "Aplicação de vacina V10");
  assert.equal(acao.tipo, "Vacina");
  assert.equal(acao.valor, 120, "campo valor");
});