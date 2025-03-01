import {randomUUID} from 'node:crypto';

export default function create({request, response}) {

    const {equipament, description, user_name} = request.body;

    const ticket = {
        id: randomUUID(),
        equipament,
        description,
        user_name,
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    return response.end(JSON.stringify(ticket));
}