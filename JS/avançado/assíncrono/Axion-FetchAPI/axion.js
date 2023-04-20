/**
 *  Ele é uma maneira bem mais simples de fazer as mesmas coisas que o fetch, eles fazem a mesma coisa mas o axios gasta bem menos código
 *  para utilizar você tem que ir no GitHub do axios/axios e importar ele para o ser documento
*/

// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregoNaPagina(json));

// Agora podendo usado o axios instalado no HTML do documento eu chamo e utilizo

axios('pessoas.json')
    .then(resposta => carregoNaPagina(resposta.data));

function carregoNaPagina(json) {
    const table = document.createElement('table');
    const resultado = document.querySelector('.resultado');

    for (const pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = `<strong>Nome:</strong> ${pessoa.nome}`;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `<strong>Idade:</strong> ${pessoa.idade}`;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `<strong>Email:</strong> ${pessoa.email}`;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    
    resultado.appendChild(table);
}