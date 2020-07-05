const router = require('express').Router();
const {albumsController} = require('../controllers')

router.get('/', albumsController.index);

module.exports = router;