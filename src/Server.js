/* const http = require("http"); // importa a ferramenta do node para criar servidor 
const petService = require("./services/petService");
const tutorService = require("./services/tutorService");
const veterinarioService = require("./services/veterinarioService");
const consultaService = require("./services/consultaService");




const servidor = http.createServer ((request, response) => { // crio um servidor toda vez que chega um pedido essa função ira rodar 

    response.setHeader ("Content-Type", "application/json"); // avisa qie a resposta sera em json 

    if (request.method === "GET" && request.url === "/pets") { // confiro o pedido : cliente pediu um GET na rota /pets
        const pets = petService.listarPets(); // uso a funcao de listar pets que esta no meu service petService.

        response.statusCode = 200; // digo que deu certo 
        response.end(JSON.stringify(pets)); // envio a resposta e encerro.
        return;

    }
      if (request.method === "GET" && request.url.startsWith("/pets/")) {
    const partesDaUrl = request.url.split("/");
    const id = Number(partesDaUrl[2]);

    const pet = petService.buscarPetPorId(id);

    if (!pet) {
      response.statusCode = 404;
      response.end(JSON.stringify({ mensagem: "Pet não encontrado" }));
      return;
    }

    response.statusCode = 200;
    response.end(JSON.stringify(pet));
    return;
  }
  if (request.method === "POST" && request.url === "/pets") { // criando um novo PET com o metodo post.
    
    let body = ""; // cria onde vamos guardar o texto recebido

    request.on("data", (pedaco) => { // escuta cada pedaco do body
        body += pedaco; // junta os pedacos
        
    });
    request.on("end", () => { // executa quando terminou de receber tudo
        const dados = JSON.parse(body);  // transforma o json em objeto javascript
        
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
        response.statusCode = 400;
        response.end(JSON.stringify({ mensagem : "Tutor não encontrado. pet não cadastrado"}));
        return;
    }
    response.statusCode = 201;
    response.end(JSON.stringify(novoPet));

    });
    return;
}

if (request.method === "PATCH" && request.url.startsWith("/pets/")) {

    const partesDaUrl = request.url.split("/");
    const id = Number(partesDaUrl[2]);

    let body = "";

request.on("data", (pedaco) => {
    body += pedaco;
});

request.on("end", () =>{
    const dados = JSON.parse(body);

    const petAtualizado = petService.atualizarPet(id, dados);

    if (!petAtualizado) {
        response.statusCode = 404;
        response.end(JSON.stringify({ mensagem : "Pet não encontrado"}));
        return ;
    }

    response.statusCode = 200;
    response.end(JSON.stringify(petAtualizado));
});

return; 

}

if (request.method === "DELETE" && request.url.startsWith("/pets/")) {
    const partesDaUrl = request.url.split("/");
    const id = Number(partesDaUrl[2]);

    const petRemovido = petService.removerPet(id);
    
    if(!petRemovido) {
        response.statusCode = 404;
        response.end(JSON.stringify({ mensagem : "Pet não encontrado ! "})); 
        return; 
    }

    response.statusCode = 200;
    response.end(JSON.stringify({mensagem : " Pet removido com sucesso !",
        pet: petRemovido
    }));
    return;
    
}



       if (request.method ===  "GET" && request.url === "/tutores") { // confiro o pedido : cliente pediu um GET na rota /pets
        const tutores = tutorService.listarTutores(); // uso a funcao de listar pets que esta no meu service petService.

        response.statusCode = 200; // digo que deu certo 
        response.end(JSON.stringify(tutores)); // envio a resposta e encerro.
        return;

    }
    if (request.method === "GET" && request.url.startsWith("/tutores/")) {
        const partesDaUrl = request.url.split("/");
        const id = Number(partesDaUrl[2]);
        
        const tutor =tutorService.buscarTutorPorId(id);
        
        if (!tutor) {
            response.statusCode = 404;
            response.end(JSON.stringify({mensagem : "Tutor não encontrado ! "}));
            return;
        }
        response.statusCode = 200;
        response.end(JSON.stringify(tutor));
        return;
    }

    if (request.method === "POST" && request.url === "/tutores") {
        let body = "";

        request.on("data", (pedaco) => {
            body += pedaco;
        });

        request.on("end", () => {
            const dados = JSON.parse(body);

            const novoTutor = tutorService.cadastrarTutor(
                dados.id,
                dados.nome,
                dados.cpf,
                dados.telefone,
                dados.email,
                dados.endereco
            );

            response.statusCode = 201;
            response.end(JSON.stringify(novoTutor));
        });

        return;
    }

    if (request.method === "GET" && request.url === "/veterinarios") {

        const veterinarios = veterinarioService.listarVeterinarios();

        response.statusCode = 200; 
        response.end(JSON.stringify(veterinarios));
        return;
    }

    if (request.method === "GET" && request.url.startsWith("/veterinarios/")) {
        const partesDaUrl = request.url.split("/");
        const id = Number(partesDaUrl[2]);

        const veterinario = veterinarioService.buscarVeterinarioPorId(id);

        if (!veterinario) {
            response.statusCode = 404;
            response.end(JSON.stringify({ mensagem: "Veterinário não encontrado" }));
            return;
        }

        response.statusCode = 200;
        response.end(JSON.stringify(veterinario));
        return;
    }

    if (request.method === "POST" && request.url === "/veterinarios") {
        let body = "";

        request.on("data", (pedaco) => {
            body += pedaco;
        });

        request.on("end", () => {
            const dados = JSON.parse(body);

            const novoVeterinario = veterinarioService.cadastrarVeterinario(
                dados.id,
                dados.nome,
                dados.crmv,
                dados.especialidade
            );

            response.statusCode = 201;
            response.end(JSON.stringify(novoVeterinario));
        });

        return;
    }

    if (request.method == "GET" && request.url === "/consultas") {
        const consultas = consultaService.listarConsultas ();

        response.statusCode = 200;
        response.end(JSON.stringify(consultas));
        return;
    }

    if (request.method === "GET" && request.url.startsWith("/consultas/")) {
        const partesDaUrl = request.url.split("/");
        const id = Number(partesDaUrl[2]);

        const consulta = consultaService.buscarConsultaPorId(id);

        if (!consulta) {
            response.statusCode = 404;
            response.end(JSON.stringify({ mensagem: "Consulta não encontrada" }));
            return;
        }

        response.statusCode = 200;
        response.end(JSON.stringify(consulta));
        return;
    }

    if (request.method === "POST" && request.url === "/consultas") {
        let body = "";

        request.on("data", (pedaco) => {
            body += pedaco;
        });

        request.on("end", () => {
            const dados = JSON.parse(body);

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
                response.statusCode = 400;
                response.end(JSON.stringify({
                    mensagens: resultadoConsulta.mensagens
                }));
                return;
            }

            response.statusCode = 201;
            response.end(JSON.stringify(resultadoConsulta.consulta));
        });

        return;
    }

    response.statusCode = 404;
    response.end(JSON.stringify({ mensagem : "Rota não encontrada"}));
});

servidor.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000");
});




*/