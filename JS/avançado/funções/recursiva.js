// função recursiva é nada mais nada menos que uma função que se auto executa (se chama de volta)
function recursiva(max) {
    console.log(max)
    if(max > 10) return;
    max++;
    recursiva(max);
}

recursiva(-10);