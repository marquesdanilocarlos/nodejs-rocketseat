import http from 'node:http';

const server = http.createServer((req, res) => {
    const {method} = req;

    return res.writeHead(201).end(`Método: ${method}`);
});

server.listen(3333);