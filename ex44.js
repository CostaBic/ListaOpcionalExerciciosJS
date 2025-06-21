/*
44. Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/


function contarStrings(obj) {
  let contador = 0;
  for (const chave in obj) {
    if (typeof obj[chave] === 'string') {
      contador++;
    }
  }
  return contador;
}

// Exemplo de uso
const exemplo = {
  nome: "Ana",
  idade: 25,
  cidade: "São Paulo",
  ativo: true,
  profissao: "Engenheira"
};

console.log(contarStrings(exemplo)); // Saída: 3
