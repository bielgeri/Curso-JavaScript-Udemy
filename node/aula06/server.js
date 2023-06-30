const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.listen(3000, () => {
    console.log('Acessar https://localhost:3000')
    console.log('Servidor executando na porta 3000')
});