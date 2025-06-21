/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela: a) Osomatório entre todos os valores; b) Qual foi o menor valor digitado; c) Amédiaentre todos os valores; d) Quantos valores são pares.
*/



const prompt = require('prompt-sync')();

let soma = 0;
let menor = null;
let total = 0;
let pares = 0;

do {
    let num = parseInt(prompt("Digite um número: "));
    soma += num;
    total++;

    if (menor === null || num < menor) {
        menor = num;
    }

    if (num % 2 === 0) {
        pares++;
    }

    var continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
} while (continuar === "S");

let media = soma / total;

console.log("\n=== Resultado Final ===");
console.log(`a) Somatório dos valores: ${soma}`);
console.log(`b) Menor valor digitado: ${menor}`);
console.log(`c) Média dos valores: ${media.toFixed(2)}`);
console.log(`d) Quantidade de valores pares: ${pares}`);
