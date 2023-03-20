const inputText = document.querySelector('.input-text');
const listTarefas = document.querySelector('.tarefas');

function resetar() {
    inputText.value = '';
    inputText.focus();
}

const enter = inputText.addEventListener('keypress', function(event) {
    if(event.keyCode === 13) {
        if(!inputText.value) return
        criarTarefa(inputText.value);
    }
})

function criarLi() {
    const li = document.createElement('li');
    return li;
}

function buttonDelete(li) {
    li.innerText += ' ';
    const button = document.createElement('button');
    button.innerText = 'apagar';
    li.appendChild(button);
    button.setAttribute('class', 'apagar');
    button.setAttribute('title', 'Ele apaga o dado');
}

function criarTarefa(textoInput) {
    const li = criarLi();
    resetar();
    li.innerText = textoInput;
    listTarefas.appendChild(li);
    buttonDelete(li);
    salvar();
}

function salvar() {
    const listas = listTarefas.querySelectorAll('li');
    const arrayDeListas = [];
    
    for (const lis of listas) {
        let tarefaTexto = lis.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '');
        arrayDeListas.push(tarefaTexto);
    }
    
    const tarefasJSON = JSON.stringify(arrayDeListas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function retornarSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(task of listaDeTarefas) {
        criarTarefa(task);
    }
}

document.addEventListener('click', function(event) {
    let element = event.target;
    
    if(element.classList.contains('bt-add')) {
        if(!inputText.value) return
        criarTarefa(inputText.value);
    }
    
    if(element.classList.contains('apagar')) {
        element.parentElement.remove();
        salvar();
    }
});

retornarSalvas();