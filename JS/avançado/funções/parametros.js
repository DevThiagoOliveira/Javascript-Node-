// Você pode mandar parametros para uma função mesmo ela não recebendo um parametro
// é ela funciona mesmo com parametros mandados para a função, ela pega os parametros não informados é atribui no arguments
// mas lembre-se que isso so funciona em função em a palavra function
function funcao() {
    let total = 0;

    for (let argumento of arguments) {
        total += argumento;
    }
    
    console.log(total);
}

funcao(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

// também consegue mandar um objeto para uma função via desestruturação

function desestruturar({ nome, sobrenome, idade}) { // também funciona com array function arrays ([valor1, valor2, valor3, ...resto]) { console.log(valor1, resto) }
    console.log(nome, sobrenome, idade);
}

desestruturar({
    nome: 'Thiago',
    sobrenome: 'Augusto',
    idade: 22
});

/* 
    você pode usar o rest também como parametro de uma função, digamos que você queira fazer uma calculadora com uma lógica simples
    usar o REST em um parametro parece ser uma boa ideia para agilizar o processo

    Mas é de suma importancia você colocar o REST operator como o ultimo parametro se não ira dar erro no seu código
*/

function calculator(operador, acumulador, ...numeros) {
    for (const numero of numeros) {
        if(operador === 'soma') acumulador += numero;
        if(operador === 'subtração') acumulador -= numero;
        if(operador === 'multiplicação') acumulador *= numero;
        if(operador === 'divisão') acumulador /= numero;
    }

    console.log(`Resultado da ${operador} : ${acumulador}`);
}

calculator('soma', 1, 10, 20, 50, 60);
calculator('subtração', 1, 50, 10, 90, 40);
calculator('multiplicação', 1, 50, 60, 90, 70);
calculator('divisão', 1, 10, 90, 60, 30);