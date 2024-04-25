// routes/auth.js

import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/authController.js";

const authRouter = express.Router();

// Register a new user
authRouter.post("/register", registerUser);

// Log in a user
authRouter.post("/login", loginUser);

// Log out a user
authRouter.post("/logout", logoutUser);

export default authRouter;
