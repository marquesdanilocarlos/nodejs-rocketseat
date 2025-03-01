import routes from '../routes/index.js'
import Database from '../database/database.js'
import extractQueryParams from '../helpers/extractQueryParams.js'

const database = new Database();

export function routeHandler(request, response) {
    const route = routes.find(route => {
        return route.method === request.method && route.path.test(request.url);
    });

    if (!route) {
        response.writeHead(404).end();
    }

    const routeParams = request.url.match(route.path);
    const {query, ...params} = routeParams.groups;
    request.query = query ? extractQueryParams(query) : {};
    route.controller({request, response, database});
}