//exemplo 1

setTimeout(function(){

}, 2000);


// exemplo 2
// encapsular o setTimeout em uma promise

function timeout(timeoutMilisecond){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), timeoutMilisecond);

    });
}

const teste = timeout(3000).then(() => {

});

setTimeout(() => teste.then(() => console.log('abc')), 10000)

//Exemplo 3
// método estático All

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
]).then((v) => console.log(v));