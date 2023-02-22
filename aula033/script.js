const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Rodrigues', 
    idade: 30,
    endereco: {
        rua: 'Av Paulista',
        numero: 320
    }
}

// Atribuição via desestruturação
const {nome, ...resto } = pessoa
console.log(nome, resto)