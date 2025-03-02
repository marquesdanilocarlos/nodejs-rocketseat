import express, {Express, NextFunction, Request, Response} from 'express';
import router from "./routes";
import myMiddleware from "./middlewares/myMiddleware";
import AppError from "./exceptions/AppError";

const PORT: number = 3333;
const app: Express = express();
//Definir formato das requisições como json
app.use(express.json());

//Utilizar Middleware globalmente
app.use(myMiddleware);

//Utilizar arquivo de rotas
app.use(router);

//Tratamento de exceptions
app.use(AppError.exceptionHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));