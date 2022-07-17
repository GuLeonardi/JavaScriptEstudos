console.log(`Trabalhando com condicionais`);



const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 11;
const estaAcompanhada = false;
const temPassagemCOmprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//    console.log("Comprador maior de idade");
//    listaDeDestinos.splice(1, 1);
//} else if (estaAcompanhada) {
//    console.log("Comprador está acompanhado")
//    listaDeDestinos.splice(1, 1);
//} else {
//    console.log("Comprador não é maior de idade e não está acompanhada");
//}


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador não é maior de idade e não está acompanhad0");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemCOmprada) {
    console.log("Boa viagem");
} else {
    console.log("você não pode embarcar");
}


console.log(listaDeDestinos);

