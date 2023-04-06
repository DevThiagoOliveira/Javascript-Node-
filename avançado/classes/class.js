/**
 * a classe pode facilitar muito a sua vida em relação a contructor por que com ela todos os metodos que você cria dentro da classe
 * já é atrelado ao prototype da classe automaticamente
 */

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        return `${this.nome} ${this.sobrenome} está falando`;
    }
}

const newPessoa = new Pessoa('Thago', 'Augusto');

console.log(newPessoa);