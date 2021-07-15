const { Router } = require('restify-router');

const routes = new Router();

const handleRouteB= (req,res)=>res.send({status:'ok', message:'Route B'})

routes.get('/', handleRouteB);

module.exports = { routes };