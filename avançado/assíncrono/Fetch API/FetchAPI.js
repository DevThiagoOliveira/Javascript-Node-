/**
 * o Fetch API faz literalmente o que este metodo faz, você pode resumir o código com o fetch();
 * 
 *  const ajax = (object) => {
 *  return new Promise((resolve, reject) => {
 *       const xhr = new XMLHttpRequest();
 *       
 *       xhr.open(object.method, object.url, true);
 *       xhr.send();
 *       
 *       xhr.addEventListener('load', () => {
 *           if(!(xhr.status >= 200) && !(xhr.status < 300)) {
 *               reject({
 *                   code: xhr.status,
 *                   text: xhr.statusText
 *               });
 *           }
 *           
 *           resolve(xhr.responseText);
 *       });
 *   });
 *}
 *
 * Sintexe:.
 * 
 * fetch(Aqui vem a url ou o arquivo HTML); // ele já te retorna uma promise então posso dar um catch para pegar os dados
 *     .then(response => response.text()) // para pegar o texto eu tenho que usar o metodo text() que me retorna outra promisa então tenho que dar outro then
 *     .then(html => console.log(html)) // agora ele me retorna o html certinho
 *     .catch(err => console.log(err));
 * 
*/
        
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
        const response = await fetch(href);
        if(response.status !== 200) {
            throw new Error('ERROR PAGE NOT FOUND')
        };
    
        const html = await response.text();
        carregaResultado(html);
        
    } catch (err) {
        carregaResultado(err);
    }

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}