const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");
const { route } = require("./users.routes");
const { upload } = require("../middlewares/upload.middleware");

router.get("/", productsController.getAllProducts);
router.post("/", upload.single("image"), productsController.createProduct);

router.get("/categories", productsController.getCategories);
router.get("/category/:category", productsController.getProductsByCategory);

router.get("/:id", productsController.getProductById);
router.put("/:id", upload.single("image"), productsController.updateProduct);
router.patch("/:id/stock", productsController.updateProductStock);

router.delete("/:id", productsController.deleteProduct);

module.exports = router;
