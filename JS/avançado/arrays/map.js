/* 
    O MAP SEMPRE vão retornar um ARRAY com a mesma quantidade de elementos ou menos mas com possibilidade de alterar os elementos do array original;
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDoArrayDobrados = numeros.map((element) => {
    return `valor dobrado: ${element * 2}`;
});

console.log(numerosDoArrayDobrados);

/*
    Para cada elemento:
    Retorne apenas uma string com o nome da pessoa
    Remova apenas a chave "nome" do objeto
    Adicione uma chave id em cada objeto
*/

const pessoas = [
    {nome: 'Thiago', idade: 22},
    {nome: 'John',idade: 53},
    {nome: 'Rosana',idade: 33},
    {nome: 'Augusto',idade: 69},
    {nome: 'Lana',idade: 22},
    {nome: 'Charles',idade: 75},
    {nome: 'Anna',idade: 35},
];

const nomePessoa = pessoas.map((object) => {
    return object.nome;
});

const apenasChaveIdade = pessoas.map((object) => {
    return { idade: object.idade };
});

const adicinarID = pessoas.map((object, indice) => {
    object.id = (indice + 1) * 1000;
    return object;
});

console.log(nomePessoa);
console.log(apenasChaveIdade);
console.log(adicinarID); // se você der um console no orray original depois deste ponto vai ver que teve mudança no array original