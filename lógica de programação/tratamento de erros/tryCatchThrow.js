/*
 É de suma importancia que você saiba tratar o que mostrar para o usuário, pois não é interessante você mostrar o erro
 do mesmo jeito que ele vem para você no terminal para o usuário que utilizará o seu programa. Um jeito de tratar isto é capturando e
 exibindo uma mensagem diferente caso aconteça erro.
*/

/*
        ESTRUTURA

    try {
      
        É executado quando não há erros

    } catch (error) {
        
        É executado quando há erros

    } finally {

        É executado sempre independentemente se há erros ou não

    }


*/


function soma(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw('Erro: o valor informado precisa ser um numero'); // ao executar você vai ver que ele vai mostrar está mensagem de erro aqui
        /* 
            mas você pode fazer um erro identico ao do terminal dando 
        throw new ReferenceError('aconteceu um erro aqui'); ou 
        throw new Error('ouve um erro aqui');
        
        */
    }

    return num1 + num2;
}

try {
    console.log(soma(5, 5));
    console.log(soma('a', 5));
}catch(err) {
    // console.log(err);
    console.log('alguma mensagem legal para o usuario');
}
