/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.
*/



const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    console.log(`Pessoa ${i + 1}:`);
    let nome = prompt("Nome: ");
    let idade = parseInt(prompt("Idade: "));
    
    nomes.push(nome);
    idades.push(idade);
    console.log(); // linha em branco
}

// Mostrar apenas menores de idade
console.log("\nPessoas menores de idade (menos de 18 anos)\n");

let encontrou = false;

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
        encontrou = true;
    }
}

if (!encontrou) {
    console.log("Nenhuma pessoa menor de idade foi cadastrada.");
}
