

const express = require('express');
const controller = require('../controller/cabController');

const router = express.Router();
router.get('/type', controller.cab);
router.post('/type', controller.cabPost);
router.get('/detail',controller.detail);
router.get('/del/:id', controller.delete);
router.get('/up/:id', controller.up);
router.post('/up/:id', controller.upPost);

module.exports = router;