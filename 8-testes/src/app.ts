import http from "node:http";

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    {id: 1 , name: 'Camiseta', price: 10},
    {id: 2 , name: 'Jaqueta', price: 20},
    {id: 3 , name: 'Sapato', price: 30},
];

const app = http.createServer((req, res) => {
   if (req.method === 'GET' && req.url === '/products') {
       return res.writeHead(200, {'Content-Type': 'application/json'})
           .end(JSON.stringify(products));
   }
});

export default app;