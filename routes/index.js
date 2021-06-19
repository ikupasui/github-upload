var express = require('express');
const { route } = require('./users');
var router = express.Router();

// Require controller modules.
var hello_controller = require('../controllers/HelloController');
var Db_controller = require('../controllers/DbController');

///* GET home page. */
router.get('/', hello_controller.hello_get);

// POST
router.post('/', hello_controller.hello_post);

// Get from DB
router.get('/db', Db_controller.list_get);

module.exports = router;
