/**
 * Created by gedionz on 9/6/17.
 */

const config = {
  db: {
    client: 'mongodb',
    connection: {
      database: 'rbac_db',
      username: '',
      password: '',
      host: 'localhost'
    }
  },
  server: {
    name: 'localhost',
    port: 8192
  }
};

module.exports = config;
