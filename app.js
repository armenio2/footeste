const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Porta padrão 3000

// Rota para "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
