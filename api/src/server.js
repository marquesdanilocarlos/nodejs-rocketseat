import http from 'node:http';

const server = http.createServer((req, res) => {
    const {method, url} = req;

    if (method === "GET" && url === "/product") {
        return res.end('Lista de produtos')
    }

    if (method === "POST" && url === "/product") {
        return res.end('Cadastro de produtos')
    }

    return res
        .writeHead(404)
        .end('Rota não encontrada');
});

server.listen(3333);