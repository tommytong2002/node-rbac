/**
 * Created by gedionz on 9/6/17.
 */

const mongoose = require('mongoose');
const dbConfig = require('../config').db;

const host = dbConfig.connection.host;
const username = dbConfig.connection.username;
const password = dbConfig.connection.password;
const databaseName = dbConfig.connection.database;

mongoose.connect(
  `${dbConfig.client}://${username}:${password}@${host}/${databaseName}`,
  { useMongoClient: true }
);

module.exports = mongoose;
