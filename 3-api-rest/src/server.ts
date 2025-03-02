import express, {Request, Response} from 'express';

const PORT: number = 3333;
const app = express();

interface Params {
    id: number;
    user: string;
}


app.get("/products/:id/:user", (request: Request<Params>, response: Response) => {
    const {id, user} = request.params;
    response.send(typeof id);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));