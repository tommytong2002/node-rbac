/**
 * Created by gedionz on 9/7/17.
 */

const bunyan = require('bunyan');

const log = bunyan.createLogger({ name: 'Permission Service' });

class PermissionService {
  constructor(permissionRepository) {
    this.permissionRepository = permissionRepository;
  }

  retrievePermissions(callback) {
    this.permissionRepository.findAll((err, retrievedPermissions) => {
      if (err) {
        log.error(err);
        callback(err);
      } else {
        callback(null, retrievedPermissions);
      }
    });
  }

  retrievePermission(id, callback) {
    this.permissionRepository.find(id, (err, retrievedPermission) => {
      if (err) {
        log.error(err.message);
        callback(err);
      } else {
        callback(null, retrievedPermission);
      }
    });
  }
}
