console.log(`\n Trabalhando com condicionais`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < listaDeDestinos.length) {

    if (listaDeDestinos[contador] == destino) {
        
        destinoExiste = true;
        break;
    }

    contador = contador + 1;
}

console.log("Destino existe: ", destinoExiste);
