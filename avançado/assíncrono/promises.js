/**
 *  As promises prodem ser bem úteis se você precisa concatenar uma ordem de execução
 * 
 * exemplo eu tenho uma função que retorna uma frase em momento aleatorios e que quero que ele mostre a frase 1
 * e logo em seguida me mostra a frase 2, mas o tempo delas são aleatorias então é dificil sempre mostrar frase 1 e frase 2
 * ae que entra a promise você pode concatenar infinitas execuções sem uma arvore de natal de linhas de código.
 * 
 * 
 * Syntaxe: 
 * 
 * funtion promise(mensagem)  {
 *    return new Promise((resolve, reject) => {  // ele é bem auto didata o resolve é como se fosse o true e o reject o false
 *                                                  no resolve você pode continuar sua execução e pegar o erro no reject ou vise versa
 *       resolve(mensagem);
 *    }
 * }
 * 
 * promise('frase 1')
 *      .then(() => { // caso for resolve
 *          console.log('sucesso');
 * }) não pode ter ponto ou ponto e virgula pois estou concatenando o ,catch depois do then
 *      .catch(resposta => { // caso for reject
 *         console.log('vish deu erro');
 * }) 
 */

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function random(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof mensagem !== 'string') {
            reject('Dados Corrompido');
            return;
        }
        
        setTimeout(() => {
            resolve(mensagem);
        }, tempo);
    });
}

random('Carregando banco de dados', rand(1, 3))
.then(resposta => {
    console.log('\n\nPromise Object');
    console.log(resposta);
    return random('Exibindo dados', rand(1, 3));
})
.then(resposta => {
        console.log(resposta);
        return random(3223231, rand(1, 3));
    }) 
    .catch(err => {
        console.log('ERRO: ' + err);
    });

// -----------------------------------------------------------------

// Promise.all(); | ele executa todas as promises e depois te da o resultado | se uma cair no erro ele rejeita tudo
const promises = [
    'Primeiro Valor',
    random('Promise 1 - passou', rand(1, 3)),
    random('Promise 2 - passou', rand(2, 5)),
    random('Promise 3 - passou', rand(3, 9)),
    random('Promise 4 - passou', rand(1, 4)),
]

Promise.all(promises)
    .then((result) => {
        console.log('\n\nPromise ALL');
        console.log(result);
    })
    .catch(err => {
        console.log(`ERROR: ${err}`);
        
// Promise.race(); | literalmente uma corrida o primeiro dado que passar ele entrega e tchau, se ela der errado ou não tanto faz pegou a primeira acabou.
        
    });Promise.race(promises)
    .then((result) => {
        console.log('\n\nPromise RACE');
        console.log(result);
    })
    .catch(err => {
        console.log(`ERROR: ${err}`);
    });

// Promise.resolve() | ele sempre cai no resolve, sempre será true

// Primise.reject() | ele sempre cai no reject, sempre será false