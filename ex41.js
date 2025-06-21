/*
41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/


// Definindo o objeto pessoa
let pessoa = {
  nome: "João",
  idade: 30
};

// Acessando e imprimindo a propriedade idade
console.log("Idade:", pessoa.idade);

// Adicionando a propriedade email
pessoa.email = "joao@example.com";

// Imprimindo o objeto atualizado
console.log("Objeto pessoa atualizado:", pessoa);
