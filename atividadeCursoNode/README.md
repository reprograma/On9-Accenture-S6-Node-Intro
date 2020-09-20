# On9-Accenture-S6-Node-Intro

# Atividade 
<p> Explique sobre:<b> Promisses e Callbacks <b> </p>

<br>
<p>
<b> Contexto: <b>O JS foi feito para não bloquear o usuário e trabalha stack single-thread(essa parte só executa uma função por vez). Imagina que se você tem que fazer uma coisa para depois deixar o usuário fazer outra operação. Por isso o JS é assíncrono e permite que vc passe funções como parâmetro para outras funções e essa função vai ser executada no futuro em outro momento, quando aquela operação termina. 
</p>

## Promisses
- Basicamente é uma “promessa” de que no futuro eu vou resolver ou rejeitar algum valor
- Uma forma de lidar com instruções assíncronas sem precisar de callaback. 
- Se usa async/await 
- usa método Then, ou seja, quando ela finalizar ela executa
- Promise usa de parâmetros resolve(sucesso) e reject(falha).
- Possui método estático chamado All que recebe “n” promises , ex: array, ou qualquer iterável

 Ex: setTimeOut, depois de determinados milissegundos se executa 


## Callbacks
- Função que chama função 
- Geralmente funções assíncronas recebem callback
- Só pode passar o callback para executar 1 única vez
- Pensando que o JS é assíncrono, não bloqueia o usuário 
- última função a ser executada e quando termina de ler o arquivo chama ela de volta
- Um callback pode ser transformado em promise
- Para ajudar a single-thread do JS, é uma maneira de rodar código em background enquanto outro código esta sendo executado na stack
- Evitar: Callback hell (uma função dentro de uma função e assim por diante...), código fica extremamente ilegível 