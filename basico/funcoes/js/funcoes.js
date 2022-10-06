function funcao() {} // para criar um função basta você chamar funtion Nome da funcao () {}

// function | nome pode ser qualquer coisa mas a regra é ter camelCase : nomeDaFuncao. e não pode ter caractere especial
// function nome () -> este parentese simboliza os parametros, eles são obrigatório para você fazer uma função mas não necessariamente precisa ter uma informação dentro deles
// é para finalizar você fecha a sua função com { } dentro destras chaves vai o código da sua função, pode ter N códigos com varias coisas mas precisa estar dentro das chaves

// function saudar () {
//     console.log('Ola');
// }

function saudar (nome) { // os parametros são nada mais, nada menos que variaveis que podem ser usadas dentro e somente dentro da função que você criou ele
    console.log(`Olá ${nome}, Bom dia !!`);
} // observação esta função feita aqui não retorna nada

saudar("Thiago"); // o nome da informação que você passa para o parametro é argumento, então estou passando o argumento Thiago para o parametro nome
saudar("Weslay");
saudar("Jefferson"); // .... ele pode ser usado quantas vezes você quiser dando varios parametros diferentes


// agora está função aqui retorna um valor, obs:. os nomes por referencia que você passa podem ser iguas pode que ele pertence somente à aquela função
function retorna (nome) {
    return `Seu nome é ${nome}`;
} 

retorna("Thiago");


function soma (x, y) { // você também pode tipar o tipo de dado que você quer que venha, igual aqui eu quero somente numeros
    const resultado = (x + y);
    return console.log(resultado); // o código é somente executado até o return, tudo abaixo disso não é executado mais
    console.log('não vai ser executado');
}

soma(15, 80);

// também da para fazer a famosa Arrow function aonde você tem

const nome = (parametro) => {
    return console.log(parametro);
}

//aonde você pode simplificar ela para ficar deste modo

const outro = maisUm => console.log(maisUm); // isto também é uma função somente simplificada
//quando a somente uma referencia você pode tirar os parenteses (), também pode tirar o return quando a somente uma informação e as chaves {}