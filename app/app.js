/**
 * Created by gedionz on 9/6/17.
 */

const restify = require('restify');
const bunyan = require('bunyan');
const config = require('./config');
const RoleController = require('./controllers/RoleController');

require('./db/mongoose');
require('./db/seeder').seed();
const log = bunyan.createLogger({ name: 'Role-based access control demo' });
const roleController = new RoleController();

(() => {
  const server = restify.createServer({
    log: log,
    version: '1.0.0'
  });

  [roleController].forEach(controller => controller.declareRoutes(server));

  server.listen(config.server.port, () => {
    log.info('Listening at %s', server.url);
  });
})();
