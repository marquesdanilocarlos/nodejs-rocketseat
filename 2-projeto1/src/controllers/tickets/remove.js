export default function remove({request, response, database}) {
    const {id} = request.params;
    database.remove('tickets', id);
    response.end();
}