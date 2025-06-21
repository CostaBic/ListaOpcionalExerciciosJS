/*
39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

const tamanho = 100;
let A = [];
let B = [];

// Gerar vetor A com 100 números reais aleatórios entre -100 e 100
for (let i = 0; i < tamanho; i++) {
    const valor = parseFloat((Math.random() * 200 - 100).toFixed(2)); // de -100 a 100
    A.push(valor);

    if (valor > 0) {
        B.push(valor);
    }
}

// Mostrar vetor A (opcional)
console.log("Vetor A (100 valores entre -100 e 100):");
console.log(A.map((v, i) => `A[${i}] = ${v.toFixed(2)}`).join("\n"));

// Mostrar vetor B
console.log("\nVetor B (compactado, apenas valores positivos):");

if (B.length === 0) {
    console.log("Nenhum valor positivo encontrado.");
} else {
    B.forEach((valor, i) => {
        console.log(`B[${i}] = ${valor.toFixed(2)}`);
    });
}
