/** Você consegue importar e exportar variaveis, constantes e funções de um arquivo JS para outro arquivo JS
 * 
 * basta colocar a palavra Import { variavel } from '/.arquivo'; para chamar para o seu arquivo atual 
 * Export { variavel }; para exportar ele para fora deste arquivo
 * 
 * 
*/

import { pessoa as objPessoa, falarNome, Test } from './export'; 
/* você consegue renomear uma exportação com as para não ocorrer duplicação de variavel no seu código, nome as nome2
* se você fizer isso no arquivo de origem também funciona export { pessoa as objPessoa }; ae so importar com o novo nome import { objPessoa } from './arquivo';
*/

const pessoa = {
    nome: 'Afonso'
};

const pessoa2 = new Test('Julia', 'Lima');
console.log(pessoa2);

// console.log(pessoa.nome, objPessoa.nome, falarNome());

/** --------------------------------------------------------
 *  Também é possivel importar todos os arquivos que você exportou
 * 
 * colocando está syntaxe
 * 
 * import * as todosExports from '.arquivo,js'; desde modo todos as variaveis ou métodos que você exportou no seu arquivo vão ficar armazenados dentro de todosExports
*/
//soma é o padrão
import somar ,* as todosExports from './export';

console.log(todosExports);
console.log(somar(10, 10));