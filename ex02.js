/*
2. Escreva um programa que pergunte avelocidade de umcarro. Caso ultrapasse 80 Km h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima davelocidade permitida.
*/


const prompt = require('prompt-sync')();

// Entrada da velocidade
const velocidade = parseFloat(prompt("Qual foi a velocidade do carro (em km/h)? "));

// Verificação se o valor é válido
if (isNaN(velocidade) || velocidade <= 0) {
    console.log("Por favor, digite uma velocidade válida.");
} else {
    const limite = 80;
    const excesso = velocidade - limite;

    if (excesso > 0) {
        const multa = excesso * 5;
        console.log(`Você foi multado por excesso de velocidade!`);
        console.log(`Velocidade registrada: ${velocidade} km/h`);
        console.log(`Multa: R$ ${multa.toFixed(2)}`);
    } else {
        console.log("Velocidade dentro do limite. Dirija com segurança!");
    }
}
