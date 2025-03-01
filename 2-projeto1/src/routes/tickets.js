export const tickets = [
    {
        method: 'GET',
        path: '/tickets',
        controller: (request, response) => {
            response.end('Rota de listagem de tickets');
        }
    },
    {
        method: 'POST',
        path: '/tickets',
        controller: (request, response) => {
            response.end('Rota de criação de tickets');
        }
    }
]