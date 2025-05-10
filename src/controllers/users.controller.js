const usersService = require("../services/users.service");

const getAllUsers = async (req, res) => {
  try {
    const users = await usersService.getAllUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    if (error.message === "No users found") {
      return response.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await usersService.saveUser({ username, email, password });

    if (!user) {
      return res.status(409).json({ error: "User already exists" });
    }

    return res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
