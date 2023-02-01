const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Fernando',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade ++
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala()






//function criaPessoa (nome, sobrenome, idade ) {
//    return { nome,sobrenome, idade }
//} 

