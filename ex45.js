/*
45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/


function contarOcorrencias(arr) {
  const resultado = {};
  for (const str of arr) {
    if (resultado[str]) {
      resultado[str]++;
    } else {
      resultado[str] = 1;
    }
  }
  return resultado;
}

// Exemplo de uso:
const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "banana"];

const frequencia = contarOcorrencias(palavras);
console.log(frequencia);
// Saída: { maçã: 2, banana: 3, laranja: 1 }

