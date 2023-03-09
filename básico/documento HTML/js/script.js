
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