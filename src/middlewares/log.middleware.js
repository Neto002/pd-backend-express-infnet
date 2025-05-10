const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "..", "data", "request.log");

const logRequest = (req, res, next) => {
  const logEntry = `[${new Date().toISOString()}] ${req.method} ${
    req.originalUrl
  } ${req.ip}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });

  next();
};

module.exports = {
  logRequest,
};
