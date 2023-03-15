
const titulo = 'Titulo deste tuto'

const cabecalho = document.getElementById('cabeca'); // para pegar o id do HTML e trata ele no JavaScript

cabecalho.innerHTML = titulo; // aqui eu estou fazendo o hmtl mudar via JS

// ----------------------

const melhorJeito = document.querySelector('.cabeca'); // o melhor jeito de você chamar um elemento do HTML
/*

o melhor jeito de selecionar um elemento é deste jeito pois você pode chamar ele via classe ou id com os sufixos CSS

. Classe
# ID

*/

// --------------------------

const selecionarTodos = document.querySelectorAll('.cabeca');

// digamos que dentro dessa classe cabeça tenha 5 ou mais tags <p> <a> <div> etc
// caso você queira pega todos os elementos dentro dessa classe você seleciona querySelectorAll por que o querySelector normal ele te retornaria somente o primeiro elemento que existe dentro da tag

// Exemplo

/*

    <div class="cabeca">
        <p> paragrafo 1 </p>
        <p> paragrafo 2 </p>
        <a> paragrafo 3 </a>
        <a> paragrafo 4 </a>
    </div>

    Se você desse um const variavel = querySelector('.cabeca');
    ele te retornaria paragrafo 1 e não subsequentimente todos os paragrafos
    mas com o querySelectorAll('.cabeca'); ele te retornaria todos os paragrafos existentes dentro dessa tag
    
    ele funcionaria igual um array, bem igual mas não é um array é um NodeList

    --------------------------------------------------------------
*/

const estilos = getComputedStyle();

//deste modo você consegue pegar os styles que contem em um elemento, Basta informar o elemento que você quer pegar os estilos.
/*
Exemplo 

    const estilosBody = getComputedStyle(document.body);

    desta forma ele pega todos os elementos de style que tem no body do meu html
    no caso eu quero pegar a cor do fundo

    backgroundColorDoBody = estilosBody.backgroundColor;

    pronto agora eu tenho uma variavel que contem a cor do fundo do body
*/

//----------------------------------------------------------------------

/*

    Para capturar o evento de click de um formulario ou de um bottão você pode colocar 
    
    const botaoFormulario = document.querySelector('.botao') 

    botaoFormulario.addEventListener('submit'); no case de um formulario que você queira mandar algum dado

    no caso de um botão seria

    botaoFormulario.addEventListener('click', function (event) {
        
        ae aqui você pode fazer de tudo

        como colocar um alerta caso clicar no botão
        alert()

    });
*/

//----------------------------------------------------------------------

/*

    document.addEventListener('click', function (event) {
        event.target // ele vai informar aonde você esta clicando na pagina então para não tem uns 20 eventListener você pode usar ele

        // e com
        event.target.classList.contains(); // ele executara caso você click no elemento em que ele estiver informado exemplo

        let element = event.taget;

        if(element.classList.contains('botaoSubmit')) {
            console.log('você deu submit no seu formulario');
        } 
        
        // então caso você click no submit do formulario ele manda essa mensagem no console, caso não ele não faz nada
    })
*/