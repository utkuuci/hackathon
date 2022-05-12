var express = require('express');
var receiptController = require('../controllers/receipt')
var router = express.Router();

router.route('/')
    .get(receiptController.GetReceipt)
    .post(receiptController.CreateReceipt);
router.route('/createqr')
    .post(receiptController.GenerateQrImage);
router.route('/user/:id').get(receiptController.GetUserReceipt);
module.exports = router;
