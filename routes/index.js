var express 		  = require('express');
var router 			  = express.Router();
var menu              = require('./menu.js');
var users             = require('./users.js');
var pool              = require('../connection.js');
var passwordHash = require('password-hash');
const functions = require('./functions.js');


/* MENU */
router.post('/api/menuSingle',          menu.menuSingle);
router.post('/api/menuFull',            menu.menuFull);
router.post('/api/menuAddDish',         menu.menuAddDish);
router.post('/api/menuUpdateSingle',    menu.menuUpdateSingle);
router.post('/api/menuDeleteSingle',    menu.menuDeleteSingle);

router.post('/api/userLogin',           users.userLogin);
router.post('/api/userRegister',        users.userRegister);

module.exports = router;