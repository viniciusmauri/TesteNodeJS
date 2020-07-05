//const { [process.env.NODE_ENV]: { baseUrl } } = require('../../config/env');
const { postsService } = require('../services');
module.exports = {
  index: async (req, res) => {
    try {
      const posts = await postsService.list();
      if (!posts.isEmpty) {
        res.status(204).json(posts);
      } else {
        res.status(200).json(posts);
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
      const resp = await postsService.create(params);
      res.status(201).json(resp);
    } catch (e) {
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },
};
