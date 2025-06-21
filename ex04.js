/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que asomadosoutrosdois.
*/



const prompt = require('prompt-sync')();

// Entrada dos três segmentos de reta
const a = parseFloat(prompt("Digite o comprimento do primeiro segmento: "));
const b = parseFloat(prompt("Digite o comprimento do segundo segmento: "));
const c = parseFloat(prompt("Digite o comprimento do terceiro segmento: "));

// Verifica se todos os valores são positivos
if (a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Todos os valores devem ser números positivos.");
} else {
    // Regra para existência de triângulo: cada lado menor que a soma dos outros dois
    if (a < b + c && b < a + c && c < a + b) {
        console.log("É possível formar um triângulo com esses segmentos.");
    } else {
        console.log("Não é possível formar um triângulo com esses segmentos.");
    }
}
