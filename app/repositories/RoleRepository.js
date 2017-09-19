/**
 * Created by gedionz on 9/6/17.
 */

const GenericRepository = require('./GenericRepository');
const Role = require('../models/Role');

class RoleRepository extends GenericRepository {
  constructor() {
    super(Role);
  }

  findByName(name, callback) {
    Role.findOne({ name }, (err, result) => {
      callback(err, result);
    });
  }
}

module.exports = RoleRepository;
