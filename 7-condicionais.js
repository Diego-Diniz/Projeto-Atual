console.log(`Trabalhando com condicionais`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 21;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);
const estaAcompanhada = false;
const temPassagemComprada = true;

/* if (idadeComprador >= 18) {
    console.log("comprador maior de idade");
    listaDeDestinos.splice(1, 1);
} else if
    (estaAcompanhada) {
    console.log("comprador está acompanhado");
    listaDeDestinos.splice(1, 1);

} else {
    console.log("Comprador não é maior de idade, e não está acompanhado");
} */

 if (
    idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem");
    listaDeDestinos.splice(2, 1);
} 

else {
    console.log("Comprador não é maior de idade e não está acompanhado");
} 

console.log("Embarque: \n\n")

if(idadeComprador >=18 && temPassagemComprada)
 {
    console.log("Boa viagem");
 }else {
    console.log("Voce não pode embarcar")
 }
console.log(listaDeDestinos);
