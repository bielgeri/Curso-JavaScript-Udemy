function retornaFuncao (nome) {
    return function () {
        return nome
    };
}

const funcao = retornaFuncao('Gabriel');
const funcao2 = retornaFuncao('Marlene');
console.dir(funcao)
console.dir(funcao2)