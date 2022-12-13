const express = require('express');
const controller = require('../controller/accountsController');


const router = express.Router();
router.get('/', controller.home);
router.get('/logout', controller.logout);
router.get('/page', controller.page);
router.get('/cab',controller.index);
router.get('/login', controller.login);
router.post('/login', controller.loginPost);
router.get('/register', controller.register);
router.post('/register', controller.registerPost);
router.get('/update/:id', controller.update);
router.post('/update/:id', controller.updatePost);
router.get('/delete/:id', controller.delete);
router.get('/end', controller.end);


module.exports = router;