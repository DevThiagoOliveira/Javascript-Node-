/**
 *  Usando prototypes em factory function
 */
const falar = {
    falar() { 
        console.log(`${this.nome} está falando.`);
    }
};

const metodosPessoa = {...falar ,}; // ou Object.assign({}, falar, andar, etc); 

function criarPessoa(nome, sobrenome) {

    return Object.create(metodosPessoa, {
        nome: { value:nome },
        sobrenome: {value:sobrenome },
    });
}

/**
 * e dessa maneira se você for olhar no console do html você vai ver mais ou menos isso aqui
 * {nome: 'Thiago', sobrenome: 'Augusto'}
 *       nome: "Thiago" sobrenome: "Augusto"
 *       [[Prototype]]: 
 *       Object
 *       falar: ƒ falar()
 */

const pessoa = criarPessoa('Thiago', 'Augusto');

console.log(pessoa.falar());