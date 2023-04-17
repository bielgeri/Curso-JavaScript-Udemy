// Factory functions / Constructor function / Classes 
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome

    Object.freeze(this);
}

const p1 = new Pessoa('Gabriel', 'Rodrigues')
const p2 = new Pessoa('Maria', 'Rodrigues')
p1.nome = 'Outra coisa';
p1.so = 'QLQ'

console.log(p1)

