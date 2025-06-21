/*
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/


const prompt = require('prompt-sync')();

const tamanho = 6;
let vetor = [];

// Leitura do vetor
console.log("Digite os 6 elementos do vetor:");
for (let i = 0; i < tamanho; i++) {
    const valor = parseFloat(prompt(`Elemento ${i + 1}: `));
    vetor.push(isNaN(valor) ? 0 : valor);
}

// Leitura da variável identificadora
const opcao = parseInt(prompt(
    `\nEscolha a operação:\n` +
    `1 - Soma dos elementos\n` +
    `2 - Produto dos elementos\n` +
    `3 - Média dos elementos\n` +
    `4 - Ordenar em ordem crescente\n` +
    `5 - Mostrar vetor\n` +
    `Digite o número da operação desejada: `
));

switch (opcao) {
    case 1:
        const soma = vetor.reduce((acc, val) => acc + val, 0);
        console.log(`Soma dos elementos: ${soma.toFixed(2)}`);
        break;

    case 2:
        const produto = vetor.reduce((acc, val) => acc * val, 1);
        console.log(`Produto dos elementos: ${produto.toFixed(2)}`);
        break;

    case 3:
        const media = vetor.reduce((acc, val) => acc + val, 0) / tamanho;
        console.log(`Média dos elementos: ${media.toFixed(2)}`);
        break;

    case 4:
        vetor.sort((a, b) => a - b);
        console.log("Vetor ordenado em ordem crescente:");
        console.log(vetor.map(n => n.toFixed(2)).join(' '));
        break;

    case 5:
        console.log("Vetor original:");
        console.log(vetor.map(n => n.toFixed(2)).join(' '));
        break;

    default:
        console.log("Opção inválida.");
}
