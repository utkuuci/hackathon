var express = require('express');
var productController = require('../controllers/product')
var router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: Function) {
        cb(null, './uploads/');
    },
    filename: function (req: any, file: any, cb: Function) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});
const fileFilter = (req: any, file: any, cb: Function) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false)
    }
}
var upload = multer({
    storage: storage, limits: {

    },
    fileFilter: fileFilter
});

router.route('/')
    .get(productController.GetProduct)
    .post(upload.single('productImage'), productController.CreateProduct)

module.exports = router;