export default function update({request, response, database}) {
    const {id} = request.params;
    console.log(id);
    response.end('Rota para atualizar um ticket');
}