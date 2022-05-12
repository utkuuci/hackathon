var express = require('express');
var userController = require('../controllers/user');
var router = express.Router();

router
    .route("/")
    .get(userController.GetUser)
    .post(userController.CreateUser);
router.route("/:id").get(userController.GetSingleUser);

module.exports = router;