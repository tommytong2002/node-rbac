/**
 * Created by gedionz on 9/6/17.
 */

const bunyan = require('bunyan');

const log = bunyan.createLogger({ name: 'Role Service' });

class RoleService {
  constructor(roleRepository, permissionRepository) {
    this.roleRepository = roleRepository;
    this.permissionRepository = permissionRepository;
  }

  retrieveRoles(callback) {
    this.roleRepository.findAll((err, retrievedRoles) => {
      if (err) {
        log.error(err);
      }
      callback(err, retrievedRoles);
    });
  }

  retrieveRole(id, callback) {
    this.roleRepository.find(id, (err, retrievedRole) => {
      if (err) {
        log.error(err.message);
        callback(err);
        return;
      }
      if (!retrievedRole.permissions || retrievedRole.permissions.length === 0) {
        callback(null, retrievedRole);
        return;
      }

      const permissions = [];
      retrievedRole.permissions.forEach((permissionId) => {
        this.permissionRepository.find(permissionId, (err, retrievedPermission) => {
          if (err) {
            log.error(err);
            callback(err);
            return;
          }
          permissions.push({
            id: retrievedPermission._id,
            name: retrievedPermission.name,
            resources: retrievedPermission.resources,
            actions: retrievedPermission.actions
          });
          if (permissions.length === retrievedRole.permissions.length) {
            retrievedRole.permissionsDetail = permissions;
            callback(null, retrievedRole);
          }
        });
      });
    });
  }


}

module.exports = RoleService;
