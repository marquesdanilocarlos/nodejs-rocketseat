export default function close({request, response, database}) {
    const {id} = request.params;
    database.update('tickets', id, {status: 'closed', updatedAt: new Date()});
    response.end();
}