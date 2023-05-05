class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa ('Gabriel', 'Rodrigues')
p1.nomeCompleto = 'Luiz Miranda Rodrigues';
console.log(p1.nome, p1.sobrenome)
console.log(p1.nomeCompleto)