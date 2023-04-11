/**
 * Async e Await eles simulam o then de forma muito resumida é isso, ele executa todos os await em uma função que tem async
 * 
 * Syntaxe:.
 * 
 * function mensagem(mensagem) {
 *      return mensagem;
 * }
 * 
 * async function mensagemAsyncrona() {
 *     try { para capturar o erro, caso você esteja usando uma promisse é de suma impotancia usar o try catch, até quando não está também
 *         const mensagem1 = await mensagem('uma');
 *         console.log(mensagem1);
 * 
 *         const mensagem2 = await mensagem('função');
 *         console.log(mensagem2);
 * 
 *         const mensagem3 = await mensagem('com');
 *         console.log(mensagem3);
 * 
 *         const mensagem4 = await mensagem('async await');
 *         console.log(mensagem4);
 *      }catch (err) {
 *         console.log(err);
 *     }
 * 
 * }
 * 
 * mensagemAsyncrona();
 */

function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function random(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof mensagem !== 'string') {
            reject('ERRO: Tipo de dado Inválido');
            return;
        }
        
        setTimeout(() => {
            resolve(mensagem);
        }, tempo);
    });
}

async function main() {
    try { // caso você queira capturar o erro caso algum deles de erro so colocar o try catch
        const mensagem1 = await random('Mensagem 1', rand());
        console.log(mensagem1);

        const mensagem2 = await random(46486181, rand());
        console.log(mensagem2);

        const mensagem3 = await random('Mensagem 3', rand());
        console.log(mensagem3);

        const mensagem4 = await random('Mensagem 4', rand());
        console.log(mensagem4);
    } catch (err) {
        console.log(err);
    }
}

main();

/**
 * se você não colocar o await em uma função async que esteja usando promise
 * provavelmente você vai ver a mensagem Promise { <pending> } que é um dos estados da promise isso acontece quando ela ainda está processando 
 * para retornar o valor
 * 
 * ela tem 3 estados
 * 
 *  Pending -> pendente // ainda está processando para retornar o valor
 *  Fulfilled -> resolvida // e quando elá completou o processadomento e caiu no resolve e já esta com o valor
 *  Reject -> rejeitada // quando o valor foi rejeitado, caiu no reject
 * 
 *  Com isso o await ele espera o termino da execução e retorna para você os valores    
 */