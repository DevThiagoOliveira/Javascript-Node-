/*
    Prototype é uma instancia que está linkada com o seu objeto no momento em que você cria a classe construtora dele,
    ela é criada automaticamente e também é compartilhada com todos os objetos criados apartir do objeto Pai ( classe construtora )

    Ele é muito útil para que você possa otimizar o seu código pois caso você tenha uma classe construtora com vários metodos ou que você
    tenha que criar vários objetos dessa mesma classe construtora, o client do seu usuário MUITO pesado, então colocando todos os métodos
    dentro da instancia prototype da sua classe construtora fará com que ele compartilhe todos os métodos com os outros objetos e não
    criará esses métodos todas as vezes que você for criar um Sub Objeto da classe construtora
    
    
    function Construct(nome) {
        this.nome = nome;

        this.showName = function() { // Você retira esse método aqui e joga para o prototype da classe construtora
            return this.name;
        }
    }

    // deste modo

    Construct.prototype.showName = function() {
        return this.nome;
    }

    // Então retirando de lá de cima é armazenando dentro do prototype você mantem esse métodos compartilhado com todos os objetos criados
    da classe construtora é também faz com que ela não seja criada todas as vezes que você criar um new Construct(), ela criará
    somente uma vez.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return `Meu nome é: ${this.nome} ${this.sobrenome}`;
}

const objPessoa1 = new Pessoa('Thiado', 'Augusto');
const objPessoa2 = new Pessoa('Albert', 'Einstein');

console.log(objPessoa1.nomeCompleto(), '|', objPessoa2.nomeCompleto());

/* 
    Também a como você setar o prototype de um objeto em outro objeto com Object.setPrototypeOf(O qual recebe, O que vai)
    
*/

const objA = {
    chaveA: 'chave A',
};

const objB = {
    chaveB: 'chave B',
}

const objC = new Object();
objC.chaveC = 'chave C';


Object.setPrototypeOf(objB, objA); // então o objB recebe o prototy do objA, logo eu posso utilizar todos os metodos e chaves de objA em objB
Object.setPrototypeOf(objC, objB); // o objC também conseguira usar a chave do objA pois o objB herdou as chaves do objA

console.log(objB.chaveA);
console.log(objC.chaveA);


// Então digamos que eu quero ter um animal que tenha uma função de nome completo mas quero re-aproveitar os prototypes de pessoa. Então basta utilizar.


const cachorro = {
    nome: 'cão',
    sobrenome: 'castrado',
    idade: 1,
    raça: 'não sei',
    vacinado: true,
};

Object.setPrototypeOf(cachorro, Pessoa.prototype);
console.log(cachorro.nomeCompleto()); // pronto agora o objeto literal cão tem o prototype de Pessoa e pode utilizar a função nomeCompleto logo esse objeto literal aparecerá que o objeto construtor dele é Pessoa

// Também consigo criar um objeto já setando o prototype dele

const objeto3 = Object.create(Pessoa.prototype, {
    nome: {
        enumerable: true,
        value: 'Nikola',
        writable: true,
        configurable: false
    },
    
    sobrenome: {
        enumerable: true,
        writable: true,
        value: 'Tesla',
        configurable: false
    }
});

console.log(objeto3.nomeCompleto());
