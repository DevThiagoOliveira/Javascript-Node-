/**
 * um método instaciado é o método que a gente vem usando desde a agora que para você utilizar ele você tem que criar uma variavel
 * e atribuir um nobo objeto da classe a essa variavel fazendo com que você consiga utilizar os metodos instanciaveis e também os atributos
 * da classe.
 * 
 * Mas uma função statica ela você chama usando o nome da propria classe e ela não tem os informações do atributo da classe
 */


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Método instanciavel
    falaNome() {
        return console.log(`${this.nome} este é meu nome `);
    }

    //Método Estatico 
    static daClasse() {// ele aceita o dado this.nome mas como é um método estático ele não tem o dado do atributo this.nome por que o metodo estatico não roda o construct
        return console.log(`${this.nome} a pessoa está andando`);
    }
}

const pessoa1 = new Pessoa('Thiago', 'Augusto');

console.log(pessoa1);
pessoa1.falaNome();

Pessoa.daClasse();