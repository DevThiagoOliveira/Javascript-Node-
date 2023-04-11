/**
 * 
 * Está função faz e requisição de qualquer tipo de dado.
 * 
 * Ela é muito útil por que você pode fazer mudanças, request de dados, ou afins sem precisar da reload na página (recarregar)
 * 
 *  Syntaxe:.
 * 
 * const request = (object) {
 * 
 *   const xhr = new XMLHttpRequest();
 *              POST
 *              GET
 *              DELETE
 *    xhr.open(methodo, URL, syncrono = false OU asyncrono = true );
 *    xhr.send(); // caso seja POST aqui você deve mandar os dados que veio pelo post EXEMPLO os dados do formulario, caso não for pode colocar null dentro ou deixa vazio
 *    
 *    Agora você checa quando a requisição terminou de ocorrer, quando foi carregado
 *    
 *    xhr.onload = function load() {} 
 *              OU
 *    
 *    xht.addEventListener('load', () => {
 *        if(xhr.status === 200) { // se o status for igual a 200 ele da sucesso
 *             object.sucess(xhr.resposeText); // mando no sucesso o texto de resposta
 *        }
 *        
 *        object.error({ 
 *                codigo: xhr.status
 *                mensagem: xhr.statusText
 *        });
 *    });
 * } 
 * 
 *  Agora basta você chamar a função e passar um objeto para ela, ou o que você definil de parametro
 * 
 *  request({
 *      method: 'GET',
 *      url: www.meuSite.com,
 *      
 *      sucess() {
 *          const resultado = document.querySelector('.resultado');
 *          resultado.innerHTML = response;
 *      },
 * 
 *      error(err) {
 *          console.log(err);
 *      }
 *  });
 */

//---------------------------------------------------------------------
/*
const ajax = (object) => {
    const xhr = new XMLHttpRequest();
    xhr.open(object.method, object.url, true);
    xhr.send();
    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            object.sucess(xhr.responseText);
        }

        object.error({
            code: xhr.status,
            text: xhr.statusText
        });
    });
}

document.addEventListener('click', (element) => {
    const elementTaget = element.target;
    const tag = elementTaget.tagName.toLowerCase();

    if(tag === 'a') {
        element.preventDefault();
        carregaPagina(elementTaget);
    }
});

function carregaPagina(element) {
    const href = element.getAttribute('href');
    ajax({
        method: 'GET',
        url: href,
        sucess(response) {
            carregaResultado(response);
        },
        error (errorText) {
            console.log(errorText);
        }
    });
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
*/

const ajax = (object) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open(object.method, object.url, true);
        xhr.send();
        
        xhr.addEventListener('load', () => {
            if(!(xhr.status >= 200) && !(xhr.status < 300)) {
                reject({
                    code: xhr.status,
                    text: xhr.statusText
                });
            }
            
            resolve(xhr.responseText);
        });
    });
}
        
document.addEventListener('click', (element) => {
    const elementTaget = element.target;
    const tag = elementTaget.tagName.toLowerCase();

    if(tag === 'a') {
        element.preventDefault();
        carregaPagina(elementTaget);
    }
});

async function carregaPagina(element) {
    const href = element.getAttribute('href');

    try {
        const response = await ajax({ method: 'GET', url: href });
        carregaResultado(response);
    } catch (err) {
        carregaResultado(err);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}