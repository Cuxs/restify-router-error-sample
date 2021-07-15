const restify = require('restify');
const { Router } = require('restify-router');
const moreRoutes = require('./api-partners');

const server = restify.createServer();
const router = new Router();

router.add('/api-partners', moreRoutes.routes);
// apply modules' routes to server
router.applyRoutes(server);

server.get('/root', (req, res) => res.send({ status: 'ok', message: 'root' }))

server.listen(process.env.PORT || 4001, () => {
  console.log('%s listening at %s', server.name, server.url);
});