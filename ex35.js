/*
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/


let pares = [];
let impares = [];

console.log("Gerando 30 números aleatórios:\n");

for (let i = 0; i < 30; i++) {
    const valor = Math.floor(Math.random() * 101); // 0 a 100
    console.log(`Valor ${i + 1}: ${valor}`);

    if (valor % 2 === 0) {
        pares.push(valor);
        if (pares.length === 5) {
            console.log("\nVetor de pares cheio. Conteúdo:");
            pares.forEach((v, i) => console.log(`par[${i}] = ${v}`));
            pares = [];
        }
    } else {
        impares.push(valor);
        if (impares.length === 5) {
            console.log("\nVetor de ímpares cheio. Conteúdo:");
            impares.forEach((v, i) => console.log(`impar[${i}] = ${v}`));
            impares = [];
        }
    }
}

// Mostrar o que sobrou nos vetores após os 30 valores
if (impares.length > 0) {
    console.log("\nRestante do vetor de ímpares:");
    impares.forEach((v, i) => console.log(`impar[${i}] = ${v}`));
}

if (pares.length > 0) {
    console.log("\nRestante do vetor de pares:");
    pares.forEach((v, i) => console.log(`par[${i}] = ${v}`));
}
