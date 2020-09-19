const http = require('http');

const servidor = http.createServer();

const porta = 3000;

servidor.listen(porta, () => {
    console.log(' servidor rodando na porta 3000');
})