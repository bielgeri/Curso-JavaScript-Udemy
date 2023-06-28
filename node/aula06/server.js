const express = require('express');
const app = express();


// CRUD -> CREATE,  READ,  UPTADE,  DELETE
//          POST     GET     PUT    DELETE

// hhtps://meusite.com/ <- GET -> Entregue a página

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST>
    Nome: <input type="text" name="nome>
    <button>Enviar</button>
    </form>
    `);
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente!')
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
});

app.listen(3000, () => {
    console.log('Acessar  https://localhost:3000')
    console.log('Servidor executando na porta 3000')
});