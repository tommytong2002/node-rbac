/**
 * Created by gedionz on 9/6/17.
 */

const bunyan = require('bunyan');
const RoleService = require('../services/RoleService');
const RoleRepository = require('../repositories/RoleRepository');
const PermissionRepository = require('../repositories/PermissionRepository');
const httpStatus = require('../constants').httpStatus;

const log = bunyan.createLogger({ name: 'Role Controller' });

class RoleController {
  constructor() {
    const roleRepository = new RoleRepository();
    const permissionRepository = new PermissionRepository();
    this.roleService = new RoleService(roleRepository, permissionRepository);
  }

  declareRoutes(server) {
    server.get('/roles', this.retrieveRoles.bind(this));
    server.get('/roles/:id', this.retrieveRole.bind(this));
  }

  retrieveRoles(req, res){
    this.roleService.retrieveRoles((err, retrievedRoles) => {
      if (err) {
        res.send(httpStatus.NOT_FOUND, { error: 'Unable to retrieve roles!' });
      } else {
        res.send(httpStatus.OK, { roles: retrievedRoles });
      }
    });
  }

  retrieveRole(req, res) {
    const roleId = req.params.id;
    this.roleService.retrieveRole(roleId, (err, retrievedRole) => {
      if (err) {
        res.send(httpStatus.NOT_FOUND, { error: 'Unable to retrieve role!' });
      } else {
        res.send(
          httpStatus.OK,
          {
            id: retrievedRole._id,
            name: retrievedRole.name,
            permissions: retrievedRole.permissions,
            permissionsDetail: retrievedRole.permissionsDetail
          }
        );
      }
    });
  }

  setRoleService(roleService) {
    this.roleService = roleService;
  }
}

module.exports = RoleController;
