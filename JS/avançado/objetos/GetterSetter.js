/*
    Getter - Geralmente usado para pegar o valor que você informa e retornar
    Setter - Geralmente usado para configurar (modificar, validar, ...) o valor pego pelo Getter 

    Sintaxe:

    Getter Setter:

    Sintaxe em função factory

    function(valorAleatorio) { 
        return {
            get nome() {
                return valorAleatorio;
            }

            set nome(valorAleatorio) {
                if(valorAleatoio >= 10) {
                    return 'Erro, valor > 10';
                }
            }
        }
    }

    Demostração na função construtora
*/

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        
        get: () => { // Getter
            return estoque;
        },

        set: (valor) => { // Setter
            if(typeof valor !== 'number') {
                throw new TypeError('Valor Invalido. Favor informar somente numeros');
            }
            
            estoque = valor;
        } 
    });
}

const objProd1 = new Produto('Maça', 5, 100);
const objProd2 = new Produto('Abobora', 1, '50');

console.log(objProd1);
console.log(`valor do meu Getter: ${objProd1.estoque}`);

objProd2.estoque = '900';

console.log(`valor do meu Getter: ${objProd2.estoque}`);