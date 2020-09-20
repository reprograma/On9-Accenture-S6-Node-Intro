//Exemplo 1

const fs = require('fs');

const fileContent = fs.readFileSync(__filename);
console.log('fileContent', fileContent);
console.log('teste 1');

//Exemplo 2
// pensando que o JS é assíncrono
// não bloqueia o usuário, última função a ser executada e quando terminou de ler o arquivo ele chamou ela de volta
//rodar código em background enquanto outro código esta sendo executado na stack


fs.readFile(__filename, (err, data) => {
    console.log('async fileContent: ', data);
});
console.log('teste 2');