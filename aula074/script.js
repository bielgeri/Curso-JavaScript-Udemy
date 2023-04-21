// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
    this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}

//instância
const pessoa1 = new Pessoa('Gabriel', 'Rodrigues');
const pessoa2 = new Pessoa('Derick', 'Aleixo')

console.dir(pessoa1)
console.dir(pessoa2)