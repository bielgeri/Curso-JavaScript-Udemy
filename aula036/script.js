// For in -> Lê os índices ou chaves do objeto
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Rodrigues',
    idade: 17
};



 for (let chave in pessoa) {
     console.log(chave,':', pessoa[chave])
 }

// for (let indice in frutas) {
//     console.log(frutas[indice])
// }