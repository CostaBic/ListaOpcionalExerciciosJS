/*
40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
*/


// Função para gerar N números inteiros únicos entre min e max
function gerarNumerosUnicos(qtd, min, max) {
    const numeros = new Set();
    while (numeros.size < qtd) {
        numeros.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(numeros);
}

// Gerar resultado oficial da Loto (5 números únicos entre 1 e 60)
const tamanho = 5;
const totalApostas = 50;
const resultado = gerarNumerosUnicos(tamanho, 1, 60).sort((a, b) => a - b);

console.log("Resultado oficial da Loto:");
console.log(resultado.join(" "));

console.log("\nVerificando as apostas:\n");

let houveGanhador = false;

for (let i = 0; i < totalApostas; i++) {
    const aposta = gerarNumerosUnicos(tamanho, 1, 60).sort((a, b) => a - b);
    const igual =
        JSON.stringify(aposta) === JSON.stringify(resultado);

    console.log(`Aposta ${i + 1}: ${aposta.join(" ")}`);
    if (igual) {
        console.log(">> Ganhador!\n");
        houveGanhador = true;
    }
}

if (!houveGanhador) {
    console.log("\nNenhum ganhador desta vez.");
}
