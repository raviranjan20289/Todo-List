const express = require("express");

const router = express.Router();

const adminController = require("../controller/task");

router.post("/add-product", adminController.postAddProduct);

router.get("/products", adminController.getProducts);

router.delete("/delete-product/:prodId", adminController.postDeleteProduct);


module.exports = router;