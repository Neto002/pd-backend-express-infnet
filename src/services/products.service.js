const {
  getProducts,
  getProductById,
  saveProducts,
  getCategories,
  getProductsByCategory,
} = require("../models/products.model");

const getAll = async () => {
  return await getProducts();
};

const getById = async (id) => {
  return await getProductById(id);
};

const updateProduct = async (id, data) => {
  const product = await getProductById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  const updatedProduct = {
    ...product,
    ...data,
  }; // Spread operator to merge existing product with new data

  const products = await getProducts();
  const index = products.findIndex((p) => p.id === Number(id));
  products[index] = updatedProduct;

  await saveProducts(products);

  return products[index];
};

const getAllCategories = async () => {
  return await getCategories();
};

const getAllProductsByCategory = async (category) => {
  return await getProductsByCategory(category);
};

module.exports = {
  getAll,
  getById,
  updateProduct,
  getAllCategories,
  getAllProductsByCategory,
};
