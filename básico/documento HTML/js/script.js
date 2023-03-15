
const titulo = 'Titulo deste tuto'

const cabecalho = document.getElementById('cabeca'); // para pegar o id do HTML e trata ele no JavaScript

cabecalho.innerHTML = titulo; // aqui eu estou fazendo o hmtl mudar via JS
// cabecalho.InnerText // ele pega o Texto dentro daquela tag
// cabecalho.InnerText.replace('Titulo deste tuto', 'Tutorial Sincero') // você pode mudar o valor do texto de uma variavel dando replace no innerText dele
// cabecalho.InnerText.trim() // remove espaços extras depois ou antes do valor


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

    addEventListener('keypress', function() {}); // pega o botão que foi pressionado
    addEventListener('keydown', function() {}); // pega o botão que foi pressionado ao manter a tecla
    addEventListener('keyup', function() {}); // pega o botão que foi pressionado ao soltar a tecla
    
    addEventListener('keypress', function(event) {
        event.keyCode // o código do tipo de botão que você clicou
        botaoFormulario.focus(); // vai fazer o cursor ficar piscando dentro de uma area de texto
        botaoFormulario.value; // pega o valor do seu tag html, também pode ser adicionado um valor
    });

    botaoFormulario.setAttribute('title', 'nomeParaQualquerAtributoClass,Id,title,....'); // o setAttribute você seta um atributo para a tag
                                                                                          // você pode criar qualquer atributo para a classe.

    botaoFormulario.parentElement // ele mostra o pai do element atual que no caso aqui é o form pois o botão está dentro do form no html
    botaoFormulario.parentElement.remove() // remove() remove uma tag um elemento do html
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


//----------------------------------------------------------------------

/*

    salvar dados no navegador sem bando de dados
    primeiro transforme o seu dado em JSON
    
    const arrayComDados = [];

    const dadoJSON = JSON.stringify(arrayComDados);

    localStorage.setItem('nome', dadoJSON); ele so aceita string por isso você tem que transformar o seu tipo de dado em JSON

    para recuperalas basta colocar

    const dadosGetItem = localStorage.getItem('nomeDoStorageColocadoNoSetItem'); você recupara os dados salvos no navegador ae basta converter de novo no tip ode dado original no meu caso um array

    const recuperarDadosOriginais = JSON.parse(dadosGetItem);

 */