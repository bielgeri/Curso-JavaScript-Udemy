const verdadeira = true

// Lete tem escopo de bloco { ... bloco}
// Var só tem escopo de função

//let nome = 'Luiz'; // criando
//var nome2 = 'Luiz'; // criando

//if (verdadeira) {
//    let nome = 'Otavio' // crinado
//    var nome2 = 'Rogério'; // redeclarada
//
//    if (verdadeira) {
//        var nome2 = 'Ronaldo'; // redeclarada
//        let nome = 'Gabriel';
        
//    }
//}

//console.log(nome, nome2)

var sobrenome = 'Miranda';

function falaOi() {
    console.log(sobrenome)

}

falaOi();