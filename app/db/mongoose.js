/**
 * Created by gedionz on 9/6/17.
 */

const mongoose = require('mongoose');
const dbConfig = require('../config').db;

mongoose.connect(
  `${dbConfig.client}://${dbConfig.connection.host}/${dbConfig.connection.database}`,
  { useMongoClient: true }
);

module.exports = mongoose;
