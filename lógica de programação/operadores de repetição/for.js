
// o for ele pega um variavel que você informa exemplo numero 0 e você pode informar para ele ir até o numero 10 caso o 0 for menor do que 10

// método antigo
//    variavel = 0; for menor que 10; variavel = 0 + 1 | no momento que ele passar de 10 ele para de executar

for(let numero = 0; numero <= 10; numero++) {
    console.log(`numero = ${numero}`);
}

console.log('\n -------------------------------- \n');

// For In

const frutas = ['Maça', 'Goiaba', 'Uva', 'Manga', 'Morango'];
const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Augusto',
    idade: '22'
};

for (const indices in frutas) { // em primeira impressão então o for in ele lé o indice ( ou nomes em caso de objeto ) do array ou objeto que você informa depois do In

    // console.log(indice); o indice nada mais, nada menos que os indices do array de frutas
    console.log(frutas[indices]) // caso você faça deste jeito ae você pega o valor atribuido em cada indice
}

for (const chave in pessoa) {
    console.log(`\n${pessoa[chave]}`);
}

console.log('\n -------------------------------- \n');

// For off 
//em sua primeira impressão da para ver que ele reporta o valor da variavel informada ao invez do indice

for (const valor of frutas) {
    console.log(valor); // então aqui dele deve retornar o nome das frutas dentro do array frutas
}

console.log('\n -------------------------------- \n');

//For Each

//ele é basica a junção de todos os anteriores so que com mais lógica

frutas.forEach(function(valor, indice, arrayCompleto) {
    console.log(`${valor} | ${indice} | ${arrayCompleto}`);
});