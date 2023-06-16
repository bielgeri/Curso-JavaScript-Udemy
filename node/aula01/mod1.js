class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Gabriel';
const sobrenome = 'Rodrigues';

exports.nome = nome
module.exports.sobrenome = sobrenome;
exports.outrCoisa = 'Outra coisa'