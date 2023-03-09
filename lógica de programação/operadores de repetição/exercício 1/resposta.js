const elementos = [
    {tag: 'h1', texto: 'Exercício 1 - operadores de repetição'},
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagTextHTML = document.createElement(tag);
    tagTextHTML.innerText = texto; // como naõ tem HTML dentro da minha lógica seria mais seguro usar o innerText ou
    //let textoNoHTML = document.createTextNode(texto); que ele vai so adicionar uma linha de texto

    div.appendChild(tagTextHTML); // e aqui você so trocaria o tagHTML por textoNoHTML
}

container.appendChild(div);