import create from '../controllers/tickets/create.js'
import index from '../controllers/tickets/index.js'
import update from '../controllers/tickets/update.js'
import close from '../controllers/tickets/close.js'

export const tickets = [
    {
        method: 'GET',
        path: '/tickets',
        controller: index
    },
    {
        method: 'POST',
        path: '/tickets',
        controller: create
    },
    {
        method: 'PUT',
        path: '/tickets/:id',
        controller: update
    },
    {
        method: 'PATCH',
        path: '/tickets/:id/close',
        controller: close
    }
]