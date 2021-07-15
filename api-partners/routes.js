const { Router } = require('restify-router');
const { routes: aRoutes } = require('./a/a.routes');
const { routes: bRoutes } = require('./b/b.routes');
const { routes: cRoutes } = require('./c/c.routes');

const routes = new Router();

const handleAnotherRoute = (req,res)=>res.send(401)

routes.add('/panel/a', aRoutes); // businessUser module routes.
routes.add('/panel/b', bRoutes); // businessUser module routes.
routes.add('/panel/c', cRoutes); // businessUser module routes.

routes.get('/another-route', handleAnotherRoute)

module.exports = { routes };
