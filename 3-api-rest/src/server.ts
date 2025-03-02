import express, {Request, Response} from 'express';

const PORT: number = 3333;
const app = express();
app.use(express.json());


app.get("/products", (request: Request, response: Response) => {
    const {page, limit} = request.query;

    response.send(`Página ${page} com limit ${limit}`)
});

app.post("/products", (request: Request, response: Response) => {
    const {name, price} = request.body;
    response.send(`Produto ${name} custa ${price}`);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));