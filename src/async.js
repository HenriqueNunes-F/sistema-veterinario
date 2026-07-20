const fs = require("fs/promises");
const petService = require("./services/petService.js");


function buscarPetPorIdAsync(petId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const pet = petService.buscarPetPorId(petId);
            if (pet) {
                resolve(pet)
                
            } else {
                reject ("Pet não encontrado");
            }
        }, 2000);
    });
}

async function executarBusca() {
    try {
        console.log("Buscando pet ...")

        const pet = await buscarPetPorIdAsync(1);

        console.log("pet encontrado:");
        console.log(pet);
    } catch (erro) {
        console.log("Erro:", erro);
        
    }
    
}

executarBusca(1);



async function lerReadme() { // ler arquivos com node. fs
  try {
   const conteudo = await fs.readFile("src/data/pets.js", "utf-8");
    console.log(conteudo);
  } catch (erro) {
    console.log("Erro ao ler README:", erro.message);
  }
}

lerReadme();

