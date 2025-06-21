/*
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir: Carros populares- Até 100 Kmpercorridos: R$ 0,20 por Km- Acimade100Kmpercorridos: R$ 0,10 por Km Carros de luxo- Até 200 Kmpercorridos: R$ 0,30 por Km- Acimade200Kmpercorridos: R$ 0,25 por Km
*/




const prompt = require('prompt-sync')();


const tipo = prompt("Tipo de carro (popular ou luxo): ").toLowerCase();
const dias = parseInt(prompt("Quantidade de dias de aluguel: "));
const km = parseFloat(prompt("Quantidade de Km percorridos: "));

let precoDia = 0;
let precoKm = 0;

if (tipo === "popular") {
    precoDia = 90;

    if (km <= 100) {
        precoKm = km * 0.20;
    } else {
        precoKm = km * 0.10;
    }

} else if (tipo === "luxo") {
    precoDia = 150;

    if (km <= 200) {
        precoKm = km * 0.30;
    } else {
        precoKm = km * 0.25;
    }

} else {
    console.log("Tipo de carro inválido.");
    process.exit();
}

const precoTotal = (dias * precoDia) + precoKm;

console.log(`\nResumo do Aluguel:`);
console.log(`Tipo do carro: ${tipo}`);
console.log(`Dias alugados: ${dias}`);
console.log(`Km percorridos: ${km}`);
console.log(`Valor total a pagar: R$ ${precoTotal.toFixed(2)}`);
