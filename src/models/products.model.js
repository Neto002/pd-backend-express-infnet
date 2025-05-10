const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");
const categoriesFilePath = path.join(__dirname, "../data/categories.json");

const getProducts = async () => {
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
};

const getProductById = async (id) => {
  const data = await getProducts();
  const product = data.find((product) => product.id === Number(id));

  return product;
};

const saveProducts = async (products) => {
  await fs.writeFile(filePath, JSON.stringify(products, null, 2));
};

const getCategories = async () => {
  const data = await fs.readFile(categoriesFilePath, "utf-8");

  return JSON.parse(data);
};

const getProductsByCategory = async (category) => {
  const data = await getProducts();
  const products = data.filter((product) => product.category === category);

  return products;
};

module.exports = {
  getProducts,
  getProductById,
  saveProducts,
  getCategories,
  getProductsByCategory,
};
