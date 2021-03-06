//const { [process.env.NODE_ENV]: { baseUrl } } = require('../../config/env');
const { toDosService } = require('../services');
module.exports = {
  index: async (req, res) => {
    try {
      const toDos = await toDosService.list();
      if (!toDos.isEmpty) {
        res.status(204).json(toDos);
      } else {
        res.status(200).json(toDos);
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
      const resp = await toDosService.create(params);
      res.status(201).json(resp);
    } catch (e) {
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },
};
