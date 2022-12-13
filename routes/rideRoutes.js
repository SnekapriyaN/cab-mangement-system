const express = require('express');
const controller = require('../controller/rideController');

const router = express.Router();
router.get('/ride', controller.ride);
router.post('/ride',controller.ridePost);
router.post('/edit/:id', controller.editPost);
router.get('/edit/:id', controller.edit);
router.get('/index',controller.index);
router.get('/delete/:id', controller.delete);


module.exports = router;