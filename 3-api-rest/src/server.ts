import express, {Request, Response} from 'express';
import myMiddleware from "./middlewares/myMiddleware";

const PORT: number = 3333;
const app = express();
app.use(express.json());
//app.use(myMiddleware);


app.get("/products", (request: Request, response: Response) => {
    const {page, limit} = request.query;

    response.send(`Página ${page} com limit ${limit}`);

});

app.post("/products", myMiddleware ,(request: Request, response: Response) => {
    const {name, price} = request.body;
    const requestId = request.user_id;
    //response.send(`Produto ${name} custa ${price}`);
    response.status(201).json({name, price, requestId});
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));