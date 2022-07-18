const express = require('express');
const userController = require("../controllers/userController");
const middleware = require("../middlewares/");
const router = express.Router();
router.route("/signup").post(userController.signUp)
router.route("/login").post(userController.login)
router.route("/getallusers").get(userController.getAllUsers)
router.route("/user/:id").delete(middleware.hasToken,userController.deleteUser).patch(middleware.hasToken,userController.updateUser)
.get(userController.getUserByID)
module.exports = router;