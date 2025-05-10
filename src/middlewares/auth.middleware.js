const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const { SECRET } = require("../services/auth.service");

const logFilePath = path.join(__dirname, "..", "data", "auth.log");

const logUser = (user) => {
  const logEntry = `[${new Date().toISOString()}] - User: ${
    user.username
  } - ID: ${user.id}\n`;
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, SECRET);
    logUser(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = {
  verifyToken,
};
