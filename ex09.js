/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.

*/



const prompt = require('prompt-sync')();

let totalHomens = 0;
let totalMulheres = 0;

while (true) {
    let salario = parseFloat(prompt("Digite o salário do funcionário: R$ "));
    let sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();

    if (sexo === "M") {
        totalHomens += salario;
    } else if (sexo === "F") {
        totalMulheres += salario;
    } else {
        console.log("Sexo inválido. Use M ou F.");
        continue; // volta para o início do loop
    }

    let continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
    if (continuar !== "S") {
        break;
    }
}

console.log("\n=== Relatório Final ===");
console.log(`Total de salários pagos aos homens: R$ ${totalHomens.toFixed(2)}`);
console.log(`Total de salários pagos às mulheres: R$ ${totalMulheres.toFixed(2)}`);
