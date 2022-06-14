const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const authentication = require("../auth/auth.js")


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", authentication.authentication, userController.getUserData)

router.put("/users/:userId", authentication.authentication, userController.updateUser)

router.delete("/users/:userId", authentication.authentication, userController.deleteUser)

module.exports = router;