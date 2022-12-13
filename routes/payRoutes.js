const express =require('express');
const controller= require('../controller/payController');

const router = express.Router()


// router.get('/paynow/:id', cc.payNow);
// router.get('/download/:id', cc.download);

router.get('/download',controller.download);
router.get('/card/:id', controller.card);


module.exports = router;