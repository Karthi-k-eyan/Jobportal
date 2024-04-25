// routes/index.js

import express from "express";
import authRouter from "./auth.js";
import jobsRouter from "./jobs.js";
import uploadMiddleware from "../middleware/upload.js";
import emailMiddleware from "../middleware/email.js";

const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.send("Home Page");
});

router.use("/auth", authRouter);
router.use("/jobs", jobsRouter);

// Example route using file upload middleware
router.post("/upload", uploadMiddleware.single('file'), (req, res) => {
  res.send("File uploaded successfully");
});

// Example route using email sending middleware
router.post("/send-email", emailMiddleware, (req, res) => {
  res.send("Email sent successfully");
});

export default router;
