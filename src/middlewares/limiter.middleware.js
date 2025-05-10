const rateLimit = require("express-rate-limit");
require("dotenv").config();

const MINUTES = process.env.RATE_LIMIT_MINUTES;
const QUANTITY = process.env.RATE_LIMIT_QUANTITY;

const limiter = rateLimit({
  windowMs: MINUTES * 60 * 1000,
  max: QUANTITY,
  message: "Muitas requisições, tente novamente mais tarde.",
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  limiter,
};
