console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJanehrio = `Rio de Janeiro`;


const listaDeDestinos = new Array(
    `Salvador`,
     `São Paulo`,
     `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista!
console.log(listaDeDestinos );

listaDeDestinos.splice(2, 1); // quero excluir um elemento da segunda posição e 1 item só

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); // mostrar apenas a posição 1 da minha lista