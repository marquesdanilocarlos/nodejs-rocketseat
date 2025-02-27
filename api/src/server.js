import http from 'node:http';

const server = http.createServer((req, res) => {
    const {method} = req;
    return res.end(`Método: ${method}`);
});

server.listen(3333);