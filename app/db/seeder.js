/**
 * Created by gedionz on 9/18/17.
 */

const bunyan = require('bunyan');
const Permission = require('../models/Permission');
const Role = require('../models/Role');
const permissionsData = require('./seeds/permissions.json');

const log = bunyan.createLogger({ name: 'Seeder' });

class Seeder {
  seed() {
    Role.remove({}, (err) => {
      if (err) {
        log.error(err);
        return;
      }
      Permission.remove({}, (err) => {
        if (err) {
          log.error(err);
          return;
        }
        Permission.create(permissionsData, (err, createdPermissions) => {
          if (err) {
            log.error(err);
            return;
          }
          const administrator = {
            name: 'Administrator',
            permissions: []
          };
          const dataEncoder = {
            name: 'Data Encoder',
            permissions: []
          };
          createdPermissions.forEach((permission) => {
            administrator.permissions.push(permission._id);
            if (permission.name.toLowerCase() === 'read') {
              dataEncoder.permissions.push(permission._id);
            }
          });
          Role.create([administrator, dataEncoder], (err) => {
            if (err) {
              log.error(err);
            }
          });
        });
      })
    });
  }
}

module.exports = new Seeder();
