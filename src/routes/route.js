const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController.js")
const ProductController = require("../controllers/productController.js")
const OrderController = require("../controllers/orderController.js")
const middleware = require("../middlewares/commonMiddlewares.js")
const idMiddleware = require("../middlewares/idValidation.js")



router.post("/product", ProductController.createProduct)
router.post("/user", middleware.validation, UserController.createUser)
router.post("/order", middleware.validation, idMiddleware.idValidation, idMiddleware.idFreeAppUser, OrderController.createOrder)



module.exports = router;