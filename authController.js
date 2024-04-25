// controllers/authController
import users from "../data/users.js";
import { findUserByEmailAndPassword } from "../models/userModel.js";

export const registerUser = (req, res) => {
  const { username, email, password } = req.body;
  const id = users.length + 1;
  const newUser = { id, username, email, password };
  users.push(newUser);
  res.status(201).json({ message: "User registered successfully" });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmailAndPassword(email, password);
  if (user) {
    req.session.user = user;
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export const logoutUser = (req, res) => {
  if (req.session.user) {
    req.session.destroy();
    res.json({ message: "Logout successful" });
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
};
