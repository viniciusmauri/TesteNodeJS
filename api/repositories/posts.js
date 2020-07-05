const model = require('../models/posts/schema');
const mongoose = require('mongoose');

module.exports = {
  listPosts(args) {
    return model.findAll(args);
  },

  getPost(args) {
    return model.findOne({
      where: args,
    });
  },

  createPost(obj){
    return model.create(obj);
  }
};
