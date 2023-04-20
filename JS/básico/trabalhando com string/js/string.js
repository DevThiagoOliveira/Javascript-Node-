let UmaString = 'Um "Texto"';

UmaString = "Um \"Texto\""; // você pode escapar um texto dessas duas formas caso queira

console.log(UmaString);

// pegar elemento de uma string, trata ela como array

UmaString = "0123456789 Olha";

console.log(UmaString[2]); // Obs:. Array sempre começa em 0

console.log(UmaString.charAt(5)); // também existe um método para isso

console.log(UmaString.indexOf('Olha')); // ele retorna a posição da palavra que você pesquiso, caso não encontre retorna -1

console.log(UmaString.indexOf('a', 5)); // da para ser mais expecifico para ele procurar a letra A, apartir do 5 indice adiante começo do 5 a pesquisa

console.log(UmaString.lastIndexOf('a')); // ele faz a mesma coisa do outro mas começa a pesquisa do final, ele pesquisa em decrescente

// concatenar um texto em outro

console.log(UmaString.concat(' Numeros', ' 125 Mais numeros'));
console.log(UmaString + ' Numeros 125 outros numeros');
console.log(`${UmaString} Numeros 125 e outros numeros também`);

// expressão regular

UmaString = 'MiNuScUlAs'

console.log(UmaString.match(/[a-z]/g)); // ele basicamente retorna para voce todas as letras que você indiciou na variavel, o G no final e para trazer todas

console.log(UmaString.match(/[a-z]/));

console.log(UmaString.search(/[a-z]/)); // ele pesquisa na variavel que você estanciou uma letra minuscula de a...z

console.log(UmaString.search(/[S]/));

// Mudança de texto

UmaString = "Algum Chingamento"

console.log(UmaString.replace('Chingamento', '#')); // ele troca a primeira a primeira instancia pela segunda

console.log(UmaString.replace(/m/g, '#')); // se quiser substituir N caracteres de um conjunto de palavras


// Tamanho, cortar e dividir

UmaString = "Uma frase nova para saber o tamanho dela em caracteres";

console.log(UmaString.length); // se quiser saber o tamanho de uma frase em caracteres

console.log(UmaString.slice(0, 3));

console.log(UmaString.slice(-5)); // também da para cortar dessa maneira
console.log(UmaString.slice(49, UmaString.length - 2));

console.log(UmaString.split(' ')); // ele vai dividir o conteudo da variavel aonde a espaço

console.log(UmaString.split(' ', 2)); // também da para limitar a quantidade de vezes que ele da um split

console.log(UmaString.endsWith('s')); // ele retorna true ou false se a string termina com a informação que você passou por parametro