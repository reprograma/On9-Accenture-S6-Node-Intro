var url = "https://www.youtube.com/playlist?list=PLymAQGA_lVahvIo-6LthJzJpk505b5RU8";

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);
xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
    if ( xhttp.readyState == 4 && xhttp.status == 200 ) {//Verifica se o retorno do servidor deu certo
        console.log(xhttp.responseText);
    }
}

xhttp.send();//A execução do script CONTINUARÁ mesmo que a requisição não tenha retornado do servidor

console.log(xhttp.responseText);

