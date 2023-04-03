// Você pode travar a alteração de um objeto dando Frezze nele

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // agora nenhuma mudança que você faça no código mudara os dados do objeto
}

const objPessoa1 = new Pessoa('Thiago', 'Augusto');
const objPessoa2 = new Pessoa('Augusto', 'Oliveira');

objPessoa1.nome = 'Aleatorio';
objPessoa2.sobrenome = 'random';

console.log(objPessoa1.nome, objPessoa1.sobrenome);
console.log(objPessoa2.nome, objPessoa2.sobrenome);
