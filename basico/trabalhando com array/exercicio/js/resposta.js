function classe() {
    const form = document.querySelector('.form'); // o melhor jeito de você chamar um elemento do HTML
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault(); // prevenir que ele não faça as coisas padrões de um navegador
    //     alert(1);
    // }

    function recebeEvento (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome'); // pego o input no HTML
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        resultado.innerHTML += `
            <p>Seu nome é ${nome.value} ${sobrenome.value}</p>
            <p>Você pesa ${peso.value}</p>
            <p>Sua altura é ${altura.value}</p>
        `;

        //console.log(nome.value, sobrenome.value, peso.value, altura.value); // dado.value pega o valor do input no HTML caso exista algum
    }

    form.addEventListener('submit', recebeEvento); // quero que ele fique vigilante sobre um evento submit
}
classe();