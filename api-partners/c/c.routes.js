const { Router } = require('restify-router');

const routes = new Router();

const handleRouteC= (req,res)=>res.send({status:'ok', message:'Route C'})

routes.get('/', handleRouteC);
module.exports = { routes };