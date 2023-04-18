export default class GeradorSenha {
    
    geraSenha(quantidadeCaracteres, maiusculo, minusculo, numeros, simbolos) {
        let arraySenha = [];
        quantidadeCaracteres = Number(quantidadeCaracteres);

        for (let i = 0; i < quantidadeCaracteres; i++) {
            maiusculo && arraySenha.push(String.fromCharCode(this.random(65, 91)));
            minusculo && arraySenha.push(String.fromCharCode(this.random(97, 123)));
            numeros && arraySenha.push(String.fromCharCode(this.random(48, 58)));
            simbolos && arraySenha.push(this.geraSimbolo());
        }

        return arraySenha.join('').slice(0, quantidadeCaracteres);
    }

    geraSimbolo() {
        const simbolos = ',.;~^[]{}!@#$%-*()_+=-';
        return simbolos[this.random(0, simbolos.length)];
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}