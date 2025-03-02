import express, {Express, NextFunction, Request, Response} from 'express';
import router from "./routes";
import myMiddleware from "./middlewares/myMiddleware";

const PORT: number = 3333;
const app: Express = express();
//Definir formato das requisições como json
app.use(express.json());

//Utilizar Middleware globalmente
app.use(myMiddleware);

//Utilizar arquivo de rotas
app.use(router);

//Tratamento de exceptions
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    response.status(500).json({message: error.message})
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));