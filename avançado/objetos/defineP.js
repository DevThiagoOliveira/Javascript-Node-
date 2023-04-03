/* 
    defineProprety - Uma  chave
    defineProperties - Varias chaves

    com o define você pode mudar as configurações do atributo dos seus objetos

    Exemplo:. você tem um objeto de produtos que recebe nome preço e estoque, mas não quer que ninguem mexa no estoque, e também não quer
    travar o seu atributo por completo quer que ele faça algumas coisas mas outras não. Com o define você pode fazer essas alterações

    Sintaxe: 

    function Produto(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;

        Object.defineProperty(this, 'estoque', {
            enumerable: true, //Mostrar a chave do atributo |Ex:. { estoque: undefined }
            value: true, //Mostrar o valor quando mostrar a chave |Ex:. { estoque: 510 } | Pode ser colocado qualquer valor
            writable: true // Poder alterar o valor da chave |Ex:. produto.estoque = 515;
            configurable: true // Pode ser reconfigurado |Ex:. fazer outro define para alterar a configuração deste defineP.
        })
    }
*/

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let valorFalso = '#######';

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: valorFalso, // o valor quando mostrado vai ser ### pos estou alterando
        writable: false,
        configurable: false,
    });

    Object.defineProperties(this, { // o proprieties e a mesma coisa so que você pode chamar varios atributos no map
        nome: {
            enumerable: true,
            value: nome, 
            writable: true,
            configurable: true,
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
        // ...
    });
}

const objProd = new Produto('Tomate', 50, 100);

console.log(objProd);
console.log(Object.keys(objProd)); // caso o enumerable seja false ele so mostrará as chaves nome e preco