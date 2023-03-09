
const paragrafos = document.querySelector('.paragrafos').querySelectorAll('p');

const estilosbody = getComputedStyle(document.body);
const backgroundColorBody = estilosbody.backgroundColor;

for (const tagP in paragrafos) {
    paragrafos[tagP].style.backgroundColor = backgroundColorBody;
    paragrafos[tagP].style.color = 'white'; // ou #FFF ou rgb(0, 0, 0)..........
}