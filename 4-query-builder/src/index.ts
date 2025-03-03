import express, {Request, Response} from 'express';
import knex from "./database/knex"

const app = express();
app.use(express.json());

app.post('/courses', async (request: Request, response: Response): Promise<void> => {
    const {name} = request.body;

    await knex('courses').insert({
        name
    });

    response.status(201).json({name});
});


app.get('/courses', async (request: Request, response: Response): Promise<void> => {
    const courses = await knex('courses')
        .select()
        .orderBy('created_at', 'desc');

    response.json(courses);
});

app.put('/courses/:id', async (request: Request, response: Response): Promise<void> => {
    const {id} = request.params;
    const {name} = request.body;

    await knex('courses').update({name}).where({id});

    response.status(200).json();
});


app.delete('/courses/:id', async (request: Request, response: Response): Promise<void> => {
    const {id} = request.params;

    await knex('courses').where({id}).del();

    response.status(200).json();
})

app.listen(3333);