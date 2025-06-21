/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/
const prompt = require('prompt-sync')();

function calcularPesoIdeal(altura, sexo) {
  if (sexo.toLowerCase() === 'm') {
    // Masculino
    return 72.7 * altura - 58;
  } else if (sexo.toLowerCase() === 'f') {
    // Feminino
    return 62.1 * altura - 44.7;
  } else {
    return null; // Sexo inválido
  }
}

const altura = parseFloat(prompt("Digite sua altura: "));
const sexo = prompt("Digite seu sexo (M F): ");

const pesoIdeal = calcularPesoIdeal(altura, sexo);

if (pesoIdeal === null) {
  console.log("Sexo inválido. Use 'M' ou 'F'.");
} else {
  console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
}
