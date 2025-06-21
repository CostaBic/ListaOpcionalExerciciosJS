/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
*/

const prompt = require('prompt-sync')();


let nomes = [];

// Leitura dos nomes
for (let i = 0; i < 7; i++) {
    let nome = prompt(`Digite o ${i + 1}º nome: `);
    nomes.push(nome);
}

// Exibição na ordem inversa
console.log("\nNomes na ordem inversa:");
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(`${i + 1}º: ${nomes[i]}`);
}
