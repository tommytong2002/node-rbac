/**
 * Created by gedionz on 9/6/17.
 */

class GenericRepository {
  constructor(model) {
    this.model = model;
  }

  findAll(callback) {
    this.model.find({}, (err, result) => {
      callback(err, result);
    });
  }

  find(id, callback) {
    this.model.findOne({ _id: id }, (err, result) => {
      callback(err, result);
    });
  }
}

module.exports = GenericRepository;
