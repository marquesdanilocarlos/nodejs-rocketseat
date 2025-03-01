import {routes} from '../routes.js';
import {extractQueryParams} from '../helpers/extractQueryParams.js';
import {Database} from '../database.js';

const database = new Database();

export function routeHandler(req, res) {
    const route = routes.find((route) => {
        return route.method === req.method && route.path.test(req.url);
    });

    if (!route) {
        return res
            .writeHead(404)
            .end('Rota não encontrada');
    }

    route.params = req.url.match(route.path);
    const {query, ...params} = route.params.groups;
    req.params = params;
    req.query = query ? extractQueryParams(query) : {};

    route.controller({req, res, database});
}