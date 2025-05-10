const usersModel = require("../models/users.model");
const bcrypt = require("bcryptjs");

const getAllUsers = async () => {
  const users = await usersModel.getUsers();
  if (!users || users.length === 0) {
    throw new Error("No users found");
  }
  return users;
};

const saveUser = async ({ username, password, email }) => {
  const users = await usersModel.getUsers();
  const user = users.some(
    (user) => user.username === username || user.email === email
  );

  if (user) {
    return null;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword,
    email,
  };

  users.push(newUser);

  await usersModel.saveUsers(users);

  const { password: _, ...safeUser } = newUser; // Exclude password from the returned object

  return safeUser;
};

module.exports = {
  getAllUsers,
  saveUser,
};
