const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li

}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botãoApagar = document.createElement('button')
    botãoApagar.innerText = 'Apagar'
    botãoApagar.setAttribute('class', 'apagar')
    botãoApagar.setAttribute('title', 'apagar esta mensagem')
    li.appendChild(botãoApagar)
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li)
    salvarTarefas();

}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
    
})

document.addEventListener('click', function(e) {
    const el = e.target;
    console.log(el)

    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa);
    } 
};

adicionaTarefasSalvas();