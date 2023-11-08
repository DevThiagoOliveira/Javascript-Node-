/**
 * diferente do ES6 aqui para exportar você pode colocar module.exports.obj = obj ou export.chave.obj = obj
 * e o this ele é atrelado a module.exports e também a exports então se você colocar this.obj = obj ele também vai ser exportado
 * 
 *
 */

const nome = 'Thiago';

const falaNome = () => {
    return nome;
};

this.exportado = 'Foi exportado com o this';

module.exports.nome = nome;

exports.falaNome = falaNome;

exports.pessoaNome = nome; // você pode exportar uma variavel não existente também.

//caso você usa o module.exports = {} ele cancela todos os exports anteriores