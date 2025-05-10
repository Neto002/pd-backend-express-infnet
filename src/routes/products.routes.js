const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router.get("/", productsController.getAllProducts);

router.get("/categories", productsController.getCategories);
router.get("/category/:category", productsController.getProductsByCategory);

router.get("/:id", productsController.getProductById);
router.patch("/:id", productsController.updateProduct);

module.exports = router;
