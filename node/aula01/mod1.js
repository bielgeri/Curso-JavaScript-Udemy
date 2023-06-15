class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Gabriel';
const sobrenome = 'Rodrigues';

module.exports = {
    nome, sobrenome, Pessoa
};

exports.outrCoisa = 'Outra coisa'