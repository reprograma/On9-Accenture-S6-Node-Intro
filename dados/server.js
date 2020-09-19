const http = require('http')

const servidor = http.createServer();

const porta = 3000;

servidor.listen(porta, ()=>{
    console.log('o sercidor esta rodando na porta ${porta}')
})