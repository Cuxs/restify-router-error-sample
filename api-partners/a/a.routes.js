const { Router } = require('restify-router');

const routes = new Router();

const handleRouteA= (req,res)=>res.send({status:'ok', message:'Route A'})

routes.get('/', handleRouteA);

module.exports = { routes };