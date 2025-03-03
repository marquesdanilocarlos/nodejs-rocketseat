import express, {Request, Response} from 'express';
import knex from "./database/knex"

const app = express();
app.use(express.json());

app.post('/courses', async(request: Request, response: Response):Promise<void> => {
    const {name} = request.body;

    await knex('courses').insert({
       name
    });

    response.status(201).json({name});
});

app.listen(3333);