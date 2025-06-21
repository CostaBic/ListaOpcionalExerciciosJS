/*
47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/


function mapearObjeto(obj, fn) {
  const resultado = {};
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      resultado[chave] = fn(obj[chave], chave, obj);
    }
  }
  return resultado;
}

// Usando a função:
const dados = {
  a: 2,
  b: 3,
  c: 4,
};

const dobro = mapearObjeto(dados, valor => valor * 2);
console.log(dobro);
