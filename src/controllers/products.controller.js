const productService = require("../services/products.service");

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);

    res.status(500).json({ message: "Error fetching products" });
  }
};

const createProduct = async (req, res) => {
  try {
    const imagePath = req.file ? req.file.filename : null;

    const product = await productService.createProduct(req.body, imagePath);

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);

    res.status(500).json({ message: "Error creating product" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productService.getById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);

    res.status(500).json({ message: "Error fetching product" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const productData = req.body;

  try {
    const imagePath = req.file ? req.file.filename : null;
    console.log("Image path:", imagePath);

    const updatedProduct = await productService.updateProduct(
      id,
      productData,
      imagePath
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);

    res.status(500).json({ message: "Error updating product" });
  }
};

const updateProductStock = async (req, res) => {
  const { id } = req.params;
  const { stock } = req.body;

  try {
    const updatedProduct = await productService.updateProductStock(id, stock);

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product stock:", error);

    res.status(500).json({ message: "Error updating product stock" });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await productService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);

    res.status(500).json({ message: "Error fetching categories" });
  }
};

const getProductsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const products = await productService.getAllProductsByCategory(category);

    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found in this category" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products by category:", error);

    res.status(500).json({ message: "Error fetching products by category" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await productService.removeProduct(id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting product:", error);

    res.status(500).json({ message: "Error deleting product" });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  updateProductStock,
  getCategories,
  getProductsByCategory,
  deleteProduct,
};
