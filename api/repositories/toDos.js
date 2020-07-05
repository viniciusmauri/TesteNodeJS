const model = require('../models/toDos/schema');
const mongoose = require('mongoose');

module.exports = {
  listToDos(args) {
    return model.findAll(args);
  },

  getToDo(args) {
    return model.findOne({
      where: args,
    });
  },

  createToDo(obj){
    return model.create(obj);
  }
};

