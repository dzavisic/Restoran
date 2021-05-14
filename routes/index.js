var express 		  = require('express');
var router 			  = express.Router();
var menu              = require('./menu.js');
var orders            = require('./orders.js');
var client            = require('./client.js');
var login             = require('./login.js');
var chef             = require('./chef.js');
var courses             = require('./courses.js');
var reservation             = require('./reservation.js');
var pool              = require('../connection.js');
var passwordHash = require('password-hash');
const functions = require('./functions.js');


/* MENU */
router.post('/api/menuSingle',          menu.menuSingle);
router.post('/api/menuFull',            menu.menuFull);
router.post('/api/menuAddDish',         menu.menuAddDish);
router.post('/api/menuUpdateSingle',    menu.menuUpdateSingle);
router.post('/api/menuDeleteSingle',    menu.menuDeleteSingle);
router.get('/api/getAllMenu',           menu.getAllMenu);

router.post('/api/placeOrders',         orders.placeOrders);
router.post('/api/deleteOrder',         orders.deleteOrder);
router.get('/api/getOrders',            orders.getOrders);
router.get('/api/getOrder',             orders.getOrder);

router.post('/api/placeClient',         client.placeClient);
router.post('/api/deleteClient',        client.deleteClient);
router.get('/api/getClients',           client.getClients);

router.post('/api/login/kitchen',       login.kitchen);
router.post('/api/login/cms',           login.cms);

router.get('/api/getChefs',             chef.getChefs);
router.post('/api/removeChef',          chef.removeChef);
router.post('/api/addChef',             chef.addChef);

router.get('/api/getReservations',      reservation.getReservations);
router.post('/api/deleteReservation',   reservation.deleteReservation);
router.post('/api/sendReservation',     reservation.sendReservation);

router.get('/api/getCourses',           courses.getCourses);
router.post('/api/removeCourse',        courses.removeCourse);
router.post('/api/addCourse',           courses.addCourse);

module.exports = router;