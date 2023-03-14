/*
 o setInterval ele pega a execução do que você esta mandando para ele fazer e executa em X tempo que você informa varias vezes sem parar

 ESTRUTURA 


 setInterval(referencia, tempo em miliSegundos);
*/


function hora() {
    let data = new Date();

    return console.log(data.toLocaleDateString('pt-BR', { hour12: false, hour: "2-digit", minute:'2-digit', second: '2-digit'}));
}

// setInterval(hora, 1000); lembre que se for usar assim so referencie não coloque () no final da função

const timerHoras = setInterval(function () {
    hora();
}, 1000);


/*
    Ele faz a mesma coisa que o setInterval mas derente dele, somente executa uma vez e para a execução
    exemplo a hora diferente do setIntervalo que vai mostrando a hora cada 1 minuto que informei, o setTimeout
    vai dar um intervalo de 1 minuto quando chegar nesse intervalo ele vai mostrar a hora e parar a execução, por isso ele é muito bem 
    usado para parar o loop do setInterval como mostrado
*/

setTimeout(() => {
    clearInterval(timerHoras);
}, 10000);