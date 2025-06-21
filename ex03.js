/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200Kme R$ 0.45 para viagens mais longas.
*/


const prompt = require('prompt-sync')();


// Entrada da distância
const distancia = parseFloat(prompt("Qual a distância da viagem em km? "));

// Validação e cálculo
if (isNaN(distancia) || distancia <= 0) {
    console.log("Por favor, digite uma distância válida.");
} else {
    let precoPorKm;

    if (distancia <= 200) {
        precoPorKm = 0.50;
    } else {
        precoPorKm = 0.45;
    }

    const precoTotal = distancia * precoPorKm;

    console.log(`Distância: ${distancia} km`);
    console.log(`Preço por km: R$ ${precoPorKm.toFixed(2)}`);
    console.log(`Preço total da passagem: R$ ${precoTotal.toFixed(2)}`);
}
