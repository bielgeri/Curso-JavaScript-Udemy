// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Geri'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Gabriel'))
    }

    console.log(falaNome(), `tem ${idade}, pesa ${peso}KG e tem ${altura} de altura`)
})(17, 63, 1.75);

