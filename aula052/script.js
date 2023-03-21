const nome = 'Gabriel';

function falaNome() {
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'Otavio';
    falaNome()
}

usaFalaNome();