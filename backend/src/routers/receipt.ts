var express = require('express');
var receiptController = require('../controllers/receipt')
var router = express.Router();



router.route('/')
    .get(receiptController.GetReceipt)
    .post(receiptController.CreateReceipt)

module.exports = router;