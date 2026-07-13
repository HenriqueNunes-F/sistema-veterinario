# Trabalho: Sistema de Gestão para Clínica Veterinária 🐾

## Contexto

Uma clínica veterinária do bairro está crescendo e ainda controla tudo no papel: fichas dos animais em pastas, agenda de consultas em um caderno e nenhum histórico organizado do que foi feito em cada atendimento. Quando um tutor volta com o pet meses depois, ninguém encontra o que aconteceu na última visita.

Você foi contratado para **modelar e construir um sistema** que organize essas informações. O objetivo deste trabalho **não é** decorar código pronto, e sim **treinar seu raciocínio para resolver problemas**: entender o domínio, identificar as entidades, descobrir como elas se relacionam e só então programar.

---

## O que o sistema precisa representar

O sistema gira em torno de 5 entidades principais. Leia com atenção, porque a relação entre elas é o coração do trabalho.

### 1. Tutor (Owner)

A pessoa dona do(s) animal(is). É quem paga a conta e recebe as orientações.

- Dados sugeridos: nome, CPF (ou documento), telefone, e-mail, endereço.
- Um tutor **pode ter vários pets**.

### 2. Pet (Animal)

O animal atendido pela clínica.

- Dados sugeridos: nome, espécie (cachorro, gato, etc.), raça, data de nascimento, peso, sexo.
- Todo pet **pertence a um tutor**.
- Um pet **pode passar por várias consultas** ao longo da vida.

### 3. Veterinário (Veterinary)

O profissional que realiza o atendimento.

- Dados sugeridos: nome, CRMV (registro profissional), especialidade.
- Um veterinário **realiza várias consultas**.

### 4. Consulta (Consult)

O atendimento em si — o encontro entre um pet e um veterinário em uma data.

- Dados sugeridos: data e hora, motivo da visita, observações, diagnóstico.
- Toda consulta **envolve um pet e um veterinário**.
- Uma consulta **pode ter várias ações realizadas**.

### 5. Ação realizada na consulta (Action)

Tudo o que foi de fato feito durante o atendimento: aplicar uma vacina, prescrever um remédio, fazer um exame, um curativo, etc.

- Dados sugeridos: descrição da ação, tipo (vacina, exame, medicação...), valor/custo.
- Toda ação **pertence a uma consulta**.

---

## Mapa dos relacionamentos

Antes de programar qualquer coisa, entenda este desenho. Se você entender isto, o resto é consequência:

```
Tutor (1) ───< (N) Pet
Pet   (1) ───< (N) Consulta >─── (1) Veterinário
Consulta (1) ───< (N) Ação
```

Lendo em português:

- Um **tutor** tem muitos **pets**.
- Um **pet** tem muitas **consultas**.
- Cada **consulta** foi feita por um **veterinário** (e um veterinário faz muitas consultas).
- Cada **consulta** contém uma ou mais **ações** realizadas.

> 💡 Perceba o padrão "um-para-muitos". Saber quem é o "um" e quem é o "muitos" resolve 90% da modelagem.

---

## Funcionalidades esperadas

O sistema deve permitir, no mínimo:

1. **Cadastrar** tutores, pets, veterinários.
2. **Vincular** um pet a um tutor.
3. **Registrar uma consulta** informando o pet e o veterinário.
4. **Adicionar ações** a uma consulta (uma consulta pode ter várias).
5. **Consultar o histórico** de um pet: listar todas as consultas dele, com suas ações, em ordem de data.
6. **Listar** os pets de um determinado tutor.

Funcionalidades extras (se sobrar tempo / quiser desafio):

- Calcular o **valor total** de uma consulta somando as ações.
- Mostrar quantas consultas cada veterinário atendeu.
- Buscar um pet pelo nome do tutor.

---

## Como abordar o problema (o passo a passo do raciocínio)

Este é o método que quero que você pratique — **pense antes de codar**:

1. **Entenda o domínio.** Releia as entidades acima. Consegue explicá-las com suas próprias palavras?
2. **Desenhe.** Pegue papel e caneta e faça o mapa das entidades e setas. Não pule esta etapa.
3. **Defina os dados.** Para cada entidade, liste os atributos (campos) que ela vai guardar.
4. **Defina os relacionamentos.** Onde fica a "ligação"? (Dica: o pet guarda uma referência ao seu tutor; a consulta guarda o pet e o veterinário.)
5. **Implemente aos poucos.** Comece por Tutor e Pet. Faça funcionar. Só depois avance para Consulta e Ação.
6. **Teste com um caso real.** Invente um tutor, dois pets, uma consulta com duas ações, e veja se o histórico aparece certo.

---

## O que entregar

- [ ] O **desenho** do modelo de entidades e relacionamentos (foto do papel ou digital).
- [ ] O **código** do sistema.
- [ ] Um **exemplo de uso** com dados fictícios (pelo menos 1 tutor, 2 pets, 1 veterinário, 1 consulta com 2 ações).
- [ ] Um pequeno texto explicando **as decisões que você tomou** e as dificuldades que enfrentou.

---

## Dica final 🎯

Não tente resolver tudo de uma vez. Um sistema grande é só um monte de problemas pequenos, um do lado do outro. Resolva um, depois o próximo. Se travar, **volte para o desenho** — quase todo erro de programação começa como um erro de entendimento do problema.

Bom trabalho! 🚀








## ANOTAÇÕES HENRIQUE--


## Funcionalidades

1. Cadastrar tutores, pets e veterinários  
   - `cadastrarTutor` em `src/services/tutorService.js`
   - `cadastrarPet` em `src/services/petService.js`
   - `cadastrarVeterinario` em `src/services/veterinarioService.js`

2. Vincular pet a tutor  
   - `cadastrarPet` em `src/services/petService.js`

3. Registrar consulta com pet e veterinário  
   - `registrarConsulta` em `src/services/consultaService.js`

4. Adicionar ações à consulta  
   - `adicionarAcaoNaConsulta` em `src/services/consultaService.js`

5. Consultar histórico de um pet com consultas e ações em ordem de data  
   - `listarHistoricoDoPet` em `src/services/consultaService.js`

6. Listar pets de um tutor  
   - `listarPetsDoTutor` em `src/services/tutorService.js`

## Extras

1. Calcular valor total da consulta somando ações  
   - `calcularValorTotalDaConsulta` em `src/services/consultaService.js`

2. Mostrar quantas consultas cada veterinário atendeu  
   - `listarResumoDeAtendimentos` em `src/services/veterinarioService.js`

3. Buscar pet pelo nome do tutor  
   - `buscarPetsPeloNomeDoTutor` em `src/services/tutorService.js`


   ## Conceitos praticados nesta fase

- `models`: representam as entidades do sistema.
- `data`: guardam os objetos simulados em arrays.
- `services`: guardam as regras e ações do sistema.
- `index.js`: usado para testar as funcionalidades no console.

## Métodos de array usados

- `find`: busca um único item.
- `filter`: busca vários itens.
- `map`: transforma uma lista.
- `sort`: ordena uma lista.
- `reduce`: reduz uma lista a um valor final.
- `push`: adiciona um item no array.

## Frases para gravar 


- Classe é substantivo.
- Service é verbo.
- Data é a gaveta dos objetos.
- Index chama e testa.
- `find` procura um.
- `filter` pega vários.
- `map` transforma.
- `sort` ordena.
- `reduce` soma/acumula.
- `push` guarda.
- `return` devolve.