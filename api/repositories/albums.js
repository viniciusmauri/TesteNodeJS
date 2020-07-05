const model = require('../models/albums/schema');
const mongoose = require('mongoose');

module.exports = {
  listAlbums(args) {
    return model.findAll(args);
  },

  getAlbum(args) {
    return model.findOne({
      where: args,
    });
  },

  createAlbum(obj){
    return model.create(obj);
  }
};
