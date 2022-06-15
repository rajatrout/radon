const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const authentication = require("../auth/auth.js")
const authorisation = require("../auth/auth1.js")


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", authentication.authentication, userController.getUserData)

router.put("/users/:userId", authentication.authentication, authorisation.authorisation, userController.updateUser)

router.delete("/users/:userId", authentication.authentication, authorisation.authorisation, userController.deleteUser)

module.exports = router;