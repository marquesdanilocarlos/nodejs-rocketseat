import express, {Request, Response} from 'express';

const app = express();

app.get('/', async(request: Request, response: Response):Promise<void> => {
    response.json({message: 'Hello World!'});
});

app.listen(3333);