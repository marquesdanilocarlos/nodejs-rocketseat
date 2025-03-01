export default function update({request, response, database}) {
    const {id} = request.params;
    const {equipament, description} = request.body;
    database.update('tickets', id, {equipament, description, updatedAt: new Date()});
    response.end();
}