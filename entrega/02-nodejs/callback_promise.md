# FONTES DE PESQUISA E ESTUDO
- https://erickwendel.teachable.com/ <- Curso de Node.js
- https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function <- Callback function
- https://www.youtube.com/watch?v=AUkE_pxHa4k <- Callback function
- https://www.youtube.com/watch?v=zUtqTM6_-PM <- Callback function
- https://www.youtube.com/watch?v=xp-xICNZ50c <- Callback function
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Usando_promises <- Promises
- https://www.youtube.com/watch?v=nRJhc6vXyK4 <- Promises
- https://www.youtube.com/watch?v=Tvbz6u3TyjA <- Promises
- https://www.youtube.com/watch?v=Ny4yUi4FwGg <- Promises
- https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2 <- Promises
- https://www.luiztools.com.br/post/programacao-assincrona-em-nodejs-callbacks-e-promises/ <- Callback function e promises
- https://www.youtube.com/watch?v=7Bs4-rqbCQc <- Callback function, promises e async await
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/funcoes_assincronas <- Funções assíncronas


# Callback

Callback é uma função utilizada para ser executada após um processo de modo a sincronizar os processos do Javascript. Ela é necessária porque o JS é assíncrono. Por exemplo, o seu código precisa de uma informação do banco de dados, mas o runtime do retorno (tempo de execução) demora mais que o tempo de execução do seu código. O código quebraria, mesmo estando correto. Então usa-se a função callback, que será chamada após o erro para assegurar que uma vez que o dado chegue o processamento será retomado e o código rode sem problemas.

# Promise

A promise é um proxy utilizado para permitir que o processo continue rodando mesmo sem aquele dado desconhecido, até que ele seja fornecido. Antes usava-se as funções callback, que acabavam tornando os códigos muito extensos e confusos e estes eram chamados de callback hell (inferno de callbacks), sendo assim, as promises, apesar de não reduzir o tamanho dos códigos pelo menos os tornam legíveis.



