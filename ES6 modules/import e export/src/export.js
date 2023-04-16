export const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Augusto',
    idade: 22,
    altura: 1.87
}

export function falarNome() {
    return `${pessoa.nome} ${pessoa.sobrenome}`
}

export class Test {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        
        function falarNome() {
            return `${pessoa.nome} ${pessoa.sobrenome}`
        }
    }
}

/**
 * export { pessoa as pessoa2 };
 * 
 * você consegue ter um export padrão aonde quando você importar você pode coloca qualquer nome que se você cahamar sem as chaves seu export padrão vai ser exportado
 * 
 * export default function nome() { return "nome padrão"};
 *                      OU
 * export { pessoa as default, nome, falaNome, Test}
 * 
 * import dado from './export';
 * 
 * esse dado vai ser a constante nome deste arquivo export.js
*/

export default (a, b) => a + b;