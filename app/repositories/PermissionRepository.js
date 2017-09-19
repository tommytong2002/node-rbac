/**
 * Created by gedionz on 9/7/17.
 */

const GenericRepository = require('./GenericRepository');
const Permission = require('../models/Permission');

class PermissionRepository extends GenericRepository {
  constructor() {
    super(Permission);
  }
}

module.exports = PermissionRepository;
