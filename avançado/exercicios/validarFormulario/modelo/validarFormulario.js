class ValidarFormulario {
    constructor() {
        this.form = document.querySelector('.formulario'); 
        this.events();
    }

    events() {
        this.form.addEventListener('submit', submitButton => { // usar um arrow function por que ela não permite a alteração do this da classe principal
            this.handleSubmit(submitButton);
        });
    }

    handleSubmit(submitButton) {
        submitButton.preventDefault();
        const formValido = this.camposValidos();
        const senhasValidas = this.senhasValidas();

        if(formValidation && senhasValidas) {
            alert('Formulario Enviado');
            this.formulario.submit();
        }
    }

    camposValidos() {
        let valid = true; // usar uma flag para falar se o campo vai ser valido ou não, assumo como true se der erro coloco ele como false
        
        for (const errorText of this.form.querySelectorAll('.text-error')) {
            errorText.remove();
        }

        for (const input of this.form.querySelectorAll('.validar')) {

            const label = input.previousElementSibling.innerText;

            if(!input.value) {
                this.criaErro(input, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }

            if(input.classList.contains('cpf')) {
                if(!this.validaCPF(input)) valid = false;
            } 
            
            if(input.classList.contains('usuario')) {
                if(!this.validaUsuario(input)) valid = false;
            }
        }

        return valid;
    }

    senhasValidas() {
        let valid = true;

        const senha = this.form.querySelector('.password');
        const repetirSenha = this.form.querySelector('.repet-password');

        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'A senha deverá ter entre 6 a 12 caracteres');
            valid = false;
        }

        if(senha.value !== repetirSenha.value) {
            this.criaErro(senha, 'As senhas precisam ser iguais');
            this.criaErro(repetirSenha, 'As senhas precisam ser iguais');
            valid = false;
        }

        return valid;
    }

    validaCPF(inputCPF) {
        const cpf = new CPF(inputCPF.value);
        
        if(!cpf.validator()) {
            this.criaErro(inputCPF, 'CPF Inválido')
            return false;
        }

        return true;
    }

    validaUsuario(inputUsuario) {
        const usuario = inputUsuario.value;

        if(usuario.length > 12 || usuario.length < 3) {
            this.criaErro(inputUsuario, 'O usuário deverá ter entre 3 a 12 caracteres');
            return false
        };

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) { // /^[a-zA-Z0-9]$/g) faz com que ele pegue tudo que eu informo dentro do [] o + ele faz repetidas vezes invez de 1
            this.criaErro(inputUsuario, 'Nome do usuário deverá conter somente letras e/ou números ');
            return false;
        }

        return true;
    }

    criaErro(input, mensagem) {
        const div = document.createElement('div');
        div.innerText = mensagem;
        div.classList.add('text-error');
        input.insertAdjacentElement('afterend', div);
    }
}

const formValidation = new ValidarFormulario();