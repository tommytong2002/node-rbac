/**
 * Created by gedionz on 9/6/17.
 */

const config = {
  db: {
    client: 'mongodb',
    connection: {
      database: 'rbac_db',
      host: 'localhost'
    }
  },
  server: {
    name: 'localhost',
    port: 8192
  }
};

module.exports = config;
