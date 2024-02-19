const http = require('http');

console.log('hola')

function router(req, res) { 
    res.writeHead(200, {'Content-Type': 'text/html'})
    console.log(req.url)
    switch (req.url) {
        case '/hola':
            res.write('<h1>Hola que tal</h1>')
            res.end()
            break;
        default:
            res.write('<h1>Error 404: No se lo que quieres</h1>')
            res.end()
    }

}

http.createServer(router).listen(3000)