import {tickets} from './tickets.js'
import {parseRoutePath} from '../helpers/parseRoutePath.js'

const routes = [
    ...tickets
].map(route => {
    return {
        ...route,
        path: parseRoutePath(route.path)
    }
});

export default routes;