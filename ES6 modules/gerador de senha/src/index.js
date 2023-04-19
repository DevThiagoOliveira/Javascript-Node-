/**
 * ASCII
 * 33, 38 | 63 - 64 Caractere especial
 * 48, 57 numeros
 * 65, 90 Letras Maiusculas
 * 97, 122 Letas Minusculas
 */
import 'regenerator-runtime/runtime';
import GeradorSenha from './modules/GeradorSenha';
import './assets/css/style.css';

const button = document.querySelector('.button');
const numeroInput = document.querySelector('.numeros');
const maiusculoInput = document.querySelector('.maiusculo');
const minusculoInput = document.querySelector('.minusculo');
const simbolosInput = document.querySelector('.simbolos');
const caracteres = document.querySelector('.quantidade-caracteres');
const resultado = document.querySelector('.senha-gerada');

const gerador = new GeradorSenha();

button.addEventListener('click', element => {
    
    if(caracteres.value === '' || caracteres.value < 0) {
        caracteres.value = 0;
    }
    
    if(!numeroInput.checked && !maiusculoInput.checked && !minusculoInput.checked && !simbolosInput.checked) {
        resultado.innerText = 'Nenhuma opção selecionada';
        return;
    }

    resultado.innerText = gera();
});

function gera() {
    const senha = gerador.geraSenha(
        caracteres.value,
        maiusculoInput.checked,
        minusculoInput.checked,
        numeroInput.checked,
        simbolosInput.checked
    );

    return senha;
}
