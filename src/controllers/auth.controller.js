const authService = require("../services/auth.service");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authService.authenticateUser(username, password);

    if (!token) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  login,
};
