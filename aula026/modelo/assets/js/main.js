const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const form = document.querySelector('#form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('Evento previnido')
    setResultado('Olá mundo!')
})

function criaP () {
    const p = document.createElement('p');
    return p
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML += ``;
    const p = criaP();
}