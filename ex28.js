/*
28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
*/


const tamanho = 10;
let M = [];
let somaAcima = 0;
let somaAbaixo = 0;

// Gerar matriz aleatória 10x10
for (let i = 0; i < tamanho; i++) {
  M[i] = [];
  for (let j = 0; j < tamanho; j++) {
    const valor = parseFloat((Math.random() * 100).toFixed(2));
    M[i][j] = valor;

    // Soma acima da diagonal principal
    if (i < j) {
      somaAcima += valor;
    }

    // Soma abaixo da diagonal principal
    if (i > j) {
      somaAbaixo += valor;
    }
  }
}

// Exibir a matriz (formatada)
console.log("Matriz 10x10 gerada aleatoriamente:");
for (let i = 0; i < tamanho; i++) {
  console.log(M[i].map(num => num.toFixed(2).padStart(6)).join(" "));
}

// Exibir resultados
console.log("\nResultado:");
console.log("a) Soma dos elementos acima da diagonal principal:", somaAcima.toFixed(2));
console.log("b) Soma dos elementos abaixo da diagonal principal:", somaAbaixo.toFixed(2));
