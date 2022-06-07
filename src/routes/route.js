const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/controller.js")
const BookController = require("../controllers/Controller.js")


router.post("/createAuthor", AuthorController.createAuthor)

router.post("/createBook", BookController.createBook)

router.get("/booksByChetanBhagat", BookController.booksByChetanBhagat)

router.get("/authorOfTwoStates", BookController.authorOfTwoStates)

router.get("/bookBetween50And100", BookController.bookBetween50And100)


module.exports = router;