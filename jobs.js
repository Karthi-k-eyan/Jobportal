// routes/jobs.js

import express from "express";
import multer from "multer";
import { sendEmail } from "../middleware/email.js";
import { getAllJobs, getJobById, createJob, updateJob, deleteJob, createApplicant } from "../controllers/jobController.js";
import { authenticateUser } from "./auth.js";

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Adjust the destination folder as needed

router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.post("/", authenticateUser, createJob);
router.put("/:id", authenticateUser, updateJob);
router.delete("/:id", authenticateUser, deleteJob);

// Route for job application submission
router.post("/:id/apply", authenticateUser, upload.single('resume'), sendEmail, createApplicant);

export default router;
