/*
    É uma função que nunca entrega toda a execução de uma vez no returno dela,
    pode se dizer que é uma função que tem delay ou tem telas de carregamento entre as ações,
    isto é muito bom para caso você queita perfomance em seu código para não deixar ele tão pesado

    Sintaxe:

    function* geradira() {
        return ou yield
    }

    o return ele vai executar o return e não vai executar mais nada do código além disso
    o yield ele vai executar a primeira funcionalidade caso a função seja chamada novamente ele executa o segundo yield se tiver
*/

function* gerador() {
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}

const variGerador = gerador();

console.log(variGerador.next()) // caso você queira saber o valor de uma função geradora você tem que colocar .next() no final dela

for (const valor of variGerador) { // mas o for sabe exatamente o valor que precisa ser retornado
    console.log(valor); 
}

// você também pode continuar retornos de um função a outra

function* gerador2() {
    yield 'este';
    yield 'texto';
    yield 'saiu';
}

function* gerador3() {
    yield* gerador2();
    yield 'do';
    yield 'conjunto';
    yield 'de geradores';
}

const geradorTres = gerador3();

for (const val of geradorTres) {
    console.log(val);
}

// também da para usar o yield com uma função

function funcYield() {
    yield function() {
        console.log('');
    }
    
    yield function() {
        console.log('');
    }
}