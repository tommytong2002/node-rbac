/**
 * Created by gedionz on 9/7/17.
 */

const db = require('../db/mongoose');

const PermissionSchema = db.Schema({
  name: String,
  actions: [String],
  resources: [String],
  options: db.Schema.Types.Mixed
});

const Permission = db.model('Permission', PermissionSchema);

module.exports = Permission;
