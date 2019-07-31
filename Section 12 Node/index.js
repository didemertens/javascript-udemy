const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url, true).pathname;
    if (pathName === '/products') {
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end('This is the products page');
    } 
    
    else if (pathName === '/laptop') {
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end('This is the laptop page');
    } 

    else {
        res.writeHead(404, { 'Content-type': 'text/html'});
        res.end('Path not found on the server');
    }

});

server.listen(1337, '127.0.0.1', () => {
    console.log('listening for requests now')
});