require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const userRoutes = require("./src/routes/users.routes");
const productRoutes = require("./src/routes/products.routes");
const authRoutes = require("./src/routes/auth.routes");
const { verifyToken } = require("./src/middlewares/auth.middleware");
const { logRequest } = require("./src/middlewares/log.middleware");
const { limiter } = require("./src/middlewares/limiter.middleware");

app.use(express.json());
app.use(logRequest); // middleware global para registrar todas as requisições
app.use(limiter); // middleware global para registrar todas as requisições
app.use(cors());

// Public routes
app.use("/auth", authRoutes);

// Private routes
app.use("/users", verifyToken, userRoutes);
app.use("/products", verifyToken, productRoutes); // middleware pontual para proteger um recurso específico

const port = process.env.PORT;

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
