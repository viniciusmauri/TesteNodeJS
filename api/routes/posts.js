const router = require('express').Router();

const {postsController} = require('../controllers')

router.get('/', postsController.index);

module.exports = router;