const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
};
const pessoasPrototype = Object.assign({}, falar, beber, comer)

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoasPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Gabriel', 'Rodrigues')
console.log(p1)

const p2 = criaPessoa('Maria', 'Fernanda')
console.log(p2)
