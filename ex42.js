/*
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

// Objeto dados com propriedades variadas
const dados = {
    nome: "Alice",
    idade: 28,
    hobbies: ["ler", "escrever", "jogar"],
    notas: [8.5, 7.0, 9.0],
    endereco: {
        rua: "Rua A",
        numero: 123
    },
    ativo: true,
    favoritos: ["chocolate", "música"]
};

// Função que filtra propriedades que são arrays
function filtrarArrays(dados) {
    let resultado = {};
    for (const chave in dados) {
        if (Array.isArray(dados[chave])) {
            resultado[chave] = dados[chave];
        }
    }
    return resultado;
}

// Testando a função
const propriedadesArrays = filtrarArrays(dados);
console.log(propriedadesArrays);
