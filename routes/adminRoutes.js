const express = require('express');
const controller = require('../controller/adminController');


const router = express.Router();
router.get('/admin', controller.ad);
router.get('/adminlogout', controller.adminlogout);
router.get('/adminlogin', controller.adminlogin);
router.post('/adminlogin', controller.adminloginPost);
router.get('/upage', controller.upage);

module.exports = router;