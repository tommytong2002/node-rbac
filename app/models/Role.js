/**
 * Created by gedionz on 9/6/17.
 */

const db = require('../db/mongoose');

const RoleSchema = db.Schema({
  name: String,
  permissions: []
});

const Role = db.model('Role', RoleSchema);

module.exports = Role;
