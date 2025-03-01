export default function close({request, response, database}) {
    const {id} = request.params;
    const {solution} = request.body ?? '';
    database.update('tickets', id, {status: 'closed', solution, updatedAt: new Date()});
    response.end();
}