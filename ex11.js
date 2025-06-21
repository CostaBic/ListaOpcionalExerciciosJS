/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA(Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.
*/

const prompt = require('prompt-sync')();


const primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "));
const razao = parseInt(prompt("Digite a razão da PA: "));

let soma = 0;

console.log("\nOs 10 primeiros termos da PA são:");

for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    console.log(`Termo ${i + 1}: ${termo}`);
    soma += termo;
}

console.log(`\nSoma dos 10 termos da PA: ${soma}`);
