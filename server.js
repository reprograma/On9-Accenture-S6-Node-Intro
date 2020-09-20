const http = require('http'); //faremos requisições em http
const servidor = http.createServer();
//http é um modulo que serve para o node

const porta = 3000;

//o servidor vai ouvir e atribuir para qual porta ele vai servir.
servidor.listen(porta, ()=>{
    console.log(`O servidor está rodando na porta ${porta}`)
})