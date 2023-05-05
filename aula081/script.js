class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }

}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.falar = function(){
    console.log(`${this.nome} está falando`)
}


const p1 = new Pessoa('Gabriel', 'Rodrigues')
const p2 = new Pessoa2('Derick', 'Aleixo')
console.log(p1)
console.log(p2)

class Pessoa3 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    nomeCompleto() {
        console.log(`Seu nome é ${this.nome}, e o seu sobrenome é ${this.sobrenome}`)
    }
}

const p3 = new Pessoa3('Giovanna', 'Rayssa');
console.log(p3)