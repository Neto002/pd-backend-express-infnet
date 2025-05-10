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
    const updatedProduct = await productService.updateProduct(id, productData);

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);

    res.status(500).json({ message: "Error updating product" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  updateProduct,
};
