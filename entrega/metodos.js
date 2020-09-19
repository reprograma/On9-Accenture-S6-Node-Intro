/* FONTES DE PESQUISA
- http://gabsferreira.com/os-metodos-http-e-a-diferenca-entre-eles/
- https://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol
- https://thiagolima.blog.br/api-restful-o-que-voc%C3%AA-precisa-saber-sobre-m%C3%A9todos-e-c%C3%B3digos-de-status-do-protocolo-http-af48d278a2e9
- https://www.alura.com.br/artigos/metodos-de-requisicao-do-httphttps://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
- https://httpstatusdogs.com/
*/

[
    {
        "metodo": "POST",
        "status": 201,
        "informacaoStatus": " Created — Indica que a requisição foi bem sucedida e que um novo registro foi criado como resultado. Resposta utilizada em requisições do método POST"
    },

    {   "metodo": "GET",
        "status": 200,
        "informacaoStatus": "OK — Código mais utilizado, e que indica que a requisição foi processada com sucesso."
    },

    {
        "metodo": "PUT",
        "status": 502,
        "informacaoStatus": "BAD GATEWAY - Esta resposta de erro significa que o servidor, ao trabalhar como um gateway a fim de obter uma resposta necessária para manipular a requisição, obteve uma resposta inválida."
    },

    {
        "metodo": "PATCH",
        "status": 301,
        "informacaoStatus": "MOVED PERMANENTLY - Esse código de resposta significa que a URI do recurso requerido mudou. Provavelmente, a nova URI será especificada na resposta.."
    },

    {
        "metodo": "OPTIONS",
        "status": 303,
        "informacaoStatus": "SEE OTHER - O servidor manda essa resposta para instruir ao cliente buscar o recurso requisitado em outra URI com uma requisição GET."
    }

]