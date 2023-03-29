// Função construtora -> objetos
// Função fabrica ->
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123456;
    const metodoInterno = () => {

    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método.')
    }
}

const p1 = new Pessoa('Gabriel', 'Rodrigues')
const p2 = new Pessoa('João', 'Augusto')
p1.metodo();