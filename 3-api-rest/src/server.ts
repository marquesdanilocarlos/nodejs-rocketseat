import express, {Request, Response} from 'express';

const PORT: number = 3333;
const app = express();


app.get("/products", (request: Request, response: Response) => {
    const {page, limit} = request.query;

    response.send(`Página ${page} com limit ${limit}`)
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));