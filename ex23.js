/*
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/


const TAMANHO = 7;
let MI = [];

// Criando a matriz identidade
for (let i = 0; i < TAMANHO; i++) {
  MI[i] = [];
  for (let j = 0; j < TAMANHO; j++) {
    if (i === j) {
      MI[i][j] = 1;
    } else {
      MI[i][j] = 0;
    }
  }
}

// Imprimindo a matriz
console.log("\nMatriz Identidade 7x7:\n");
for (let i = 0; i < TAMANHO; i++) {
  console.log(MI[i].join(" "));
}
