/*
    O reduce recebe também parametros mas diferente dos outros ele recebe 2 primeiro a função e segundo o valor inicial do acumulador 
    e sua função 4, a primeira é o acumulador e o restante é a mesma coisa valor, indice, array
*/

// Some todos os valores do array 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, indice, array) => {
    // por obrigatoriedade você precisa retornar algo no acumulador para que ele não retorne undefined a cada laço de repetição

    return acumulador + valor;

}, 0); // valor inicial acumulador, caso você não coloque um valor ele assumira o primeiro valor do array

console.log(total);

// Retorne a pessoa mais velha 

const pessoas = [
    {nome: 'Thiago', idade: 22},
    {nome: 'John',idade: 53},
    {nome: 'Rosana',idade: 33},
    {nome: 'Augusto',idade: 69},
    {nome: 'Lana',idade: 22},
    {nome: 'Charles',idade: 75},
    {nome: 'Anna',idade: 35},
];

const pessoaMaisVelha = pessoas.reduce((acumuladora, object) => {
    if(object.idade < acumuladora.idade) {
        return acumuladora; // toda vez que ele retornar esta variavel ele reseta o loop até que o if seja falso e retorne o valor do object
    }
    return object;
}, 0);

console.log(pessoaMaisVelha)