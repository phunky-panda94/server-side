const fs = require('fs');
const http = require('http');
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    fs.readFile(__dirname + req.url + '.html', (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write('File not found');
            return
        } 
        res.writeHead(200);
        res.end(data);
    })
})

server.listen(port, () => {
    console.log('listening')
})

