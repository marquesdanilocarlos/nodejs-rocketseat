import {routes} from '../routes/index.js'
import Database from '../database/database.js'

const database = new Database();

export function routeHandler(request, response) {
    const route = routes.find(route => {
        return route.method === request.method && route.path === request.url;
    });

    if (!route) {
        response.writeHead(404).end();
    }

    route.controller({request, response, database});
}