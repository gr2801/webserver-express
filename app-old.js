const http = require('http');

http.createServer((req, resp) => {

        resp.write('Hola Mundo');
        resp.end();



    })
    .listen(8080);

console.log('escuchando 8080');