import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

const resultado = document.querySelector('.cpf-gerado');

const CPF = new GeraCPF();

document.addEventListener('click', (element) => {

    const target = element.target;

    if(target.classList.contains('button')) {
        resultado.innerHTML = CPF.geraNovoCPF();
    }
});

if (resultado.innerHTML === null) {
    
}
