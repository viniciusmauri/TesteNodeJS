//const { [process.env.NODE_ENV]: { baseUrl } } = require('../../config/env');
const { albumsService } = require('../services');
module.exports = {
  index: async (req, res) => {
    try {
      const albums = await albumsService.list();
      if (!albums.isEmpty) {
        res.status(204).json(albums);
      } else {
        res.status(200).json(albums);
      }
    } catch (e) {
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },

  create: async (req, res) => {
    try {
      const params = req.body;
      const resp = await albumsService.create(params);
      res.status(201).json(resp);
    } catch (e) {
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },
};
