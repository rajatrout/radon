const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
const BookController = require("../controllers/productController")
const ProductController = require("../controllers/productController")

router.get("/product", ProductController.createProduct)


module.exports = router;