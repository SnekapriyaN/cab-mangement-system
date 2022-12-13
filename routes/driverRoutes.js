const express = require('express');
const controller = require('../controller/driverController');

const router = express.Router();
router.get('/drpage', controller.drpage);
router.get('/reg', controller.reg);
router.post('/reg', controller.regPost);
router.get('/dri/:id', controller.upda);
router.post('/dri/:id', controller.updaPost);
router.get('/ind',controller.ind);
router.post('/log', controller.logPost);
router.get('/log',controller.log);
router.get('/drlogout',controller.drlogout);
module.exports = router;
