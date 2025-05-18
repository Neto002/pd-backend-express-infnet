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

const createProduct = async (data, imagePath) => {
  const products = await getProducts();

  const newProduct = {
    id: Date.now(), // Unique ID based on timestamp
    ...data,
    price: parseFloat(data.price), // Ensure price is a number
    stock: parseInt(data.stock), // Ensure stock is an integer
    image: imagePath,
    rating: {
      rate: parseFloat(data.rating.rate) || 0, // Ensure rate is a number
      count: parseInt(data.rating.count) || 0, // Ensure count is an integer
    },
  }; // Spread operator to merge existing product with new data

  products.push(newProduct);

  await saveProducts(products);

  return newProduct;
};

const getById = async (id) => {
  return await getProductById(id);
};

const updateProduct = async (id, data, imagePath) => {
  const product = await getProductById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  const updatedProduct = {
    ...product,
    ...data,
    price: parseFloat(data.price), // Ensure price is a number
    stock: parseInt(data.stock), // Ensure stock is an integer
    image: imagePath,
  }; // Spread operator to merge existing product with new data

  const products = await getProducts();
  const index = products.findIndex((p) => p.id === Number(id));
  products[index] = updatedProduct;

  await saveProducts(products);

  return products[index];
};

const updateProductStock = async (id, stock) => {
  const product = await getProductById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  const updatedProduct = {
    ...product,
    stock: parseInt(stock), // Ensure stock is an integer
  };

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

const removeProduct = async (id) => {
  const products = await getProducts();
  const index = products.findIndex((p) => p.id === Number(id));

  if (index === -1) {
    throw new Error("Product not found");
  }

  const deleted = products.splice(index, 1);

  await saveProducts(products);

  return deleted[0];
};

module.exports = {
  getAll,
  createProduct,
  getById,
  updateProduct,
  updateProductStock,
  getAllCategories,
  getAllProductsByCategory,
  removeProduct,
};
