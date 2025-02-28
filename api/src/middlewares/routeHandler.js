import {routes} from '../routes.js'

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
    const {...params} = route.params.groups;
    req.params = params;
    route.controller(req, res);
}