var express 		  = require('express');
var router 			  = express.Router();
var menu              = require('./menu.js');

/* MENU */
router.post('/api/menuSingle',          menu.menuSingle);
router.post('/api/menuFull',            menu.menuFull);
router.post('/api/menuAddDish',         menu.menuAddDish);
router.post('/api/menuUpdateSingle',    menu.menuUpdateSingle);
router.post('/api/menuDeleteSingle',    menu.menuDeleteSingle);

module.exports = router;