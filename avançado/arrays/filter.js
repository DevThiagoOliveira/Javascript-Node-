/* 
    O Filter SEMPRE vão retornar um ARRAY com a mesma quantidade de elementos ou menos;

    Com o filter ele pode te retornar 3 parametros de um array

    Valor: ele pega o valor de cada indice e te retorna
    Indice: ele pega o indice de todos os valores e te retorna
    Array Inteiro: ele pode te retornar o array inteiro com todos os valores

callbackFilter(valor, indice, arrayInteiro) {
    
}
*/

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const backupNum = numeros.filter((valor, indice, arrayInteiro) => {
//     console.log(`Valores: ${valor} Indice ${indice}`);
// });

// console.log(backupNum);


const pessoa = [
    {nome: 'Thiago', idade: 22},
    {nome: 'John',idade: 53},
    {nome: 'Rosana',idade: 33},
    {nome: 'Augusto',idade: 69},
    {nome: 'Lana',idade: 22},
    {nome: 'Charles',idade: 75},
    {nome: 'Anna',idade: 35},
];

//retornar pessoas com 5 letras no nome ou mais
//retonar pessoas com mais de 50 anos
//retornar pessoas cujo o nome termina com A


const pessoaLengthMaiorCinquenta = pessoa.filter((element) => {
    return element.nome.length >= 5;
});

const pessoaCinquentaAnosMais = pessoa.filter((element) => {
    return element.idade > 50;
});

const nomePessoaTerminaComA = pessoa.filter((element) => {
    return element.nome.toLowerCase().endsWith('a');
});

console.log(pessoaLengthMaiorCinquenta);
console.log(pessoaCinquentaAnosMais);
console.log(nomePessoaTerminaComA);