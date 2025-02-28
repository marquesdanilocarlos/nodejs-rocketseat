import {parseRoutePath} from './helpers/parseRoutePath.js'

export const routes = [
    {
        method: 'GET',
        path: '/products',
        controller: (req, res) => {
            return res.end(JSON.stringify(req.query));
        }
    },
    {
        method: 'POST',
        path: '/products',
        controller: (req, res) => {
            return res.writeHead(201).end(JSON.stringify(req.body));
        }
    },
    {
        method: 'DELETE',
        path: '/products/:id',
        controller: (req, res) => {
            return res.end(`Remover produto com id ${req.params.id}`);
        }
    }
].map(route => (
        {
            ...route,
            path: parseRoutePath(route.path)
        }
    )
);