/*
    O Object.getOwnPropertyDescriptor mostra para você a configuração dos atributos da classe que você setou

    Sintaxe: 

    Object.getOwnPropertyDescriptor(Objeto, Chaves que você quer ver as propriedades);

*/

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque, // o valor quando mostrado vai ser ### pos estou alterando
        writable: false,
        configurable: false,
    });
}

const objProd = new Produto('Tomate', 50, 100);

const mostrarPropriedades = Object.getOwnPropertyDescriptor(objProd, 'nome');

console.log(mostrarPropriedades);
