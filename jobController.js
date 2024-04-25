// controllers/jobController.js

import * as jobModel from "../models/jobModel.js";

// Function to get all jobs
export const getAllJobs = (req, res) => {
    const jobs = jobModel.getAllJobs();
    res.json(jobs);
};

// Function to get a job by ID
export const getJobById = (req, res) => {
    const jobId = parseInt(req.params.id);
    const job = jobModel.getJobById(jobId);
    if (job) {
        res.json(job);
    } else {
        res.status(404).json({ message: "Job not found" });
    }
};

// Function to create a new job
export const createJob = (req, res) => {
    const { title, description, location } = req.body;
    const newJob = jobModel.createJob(title, description, location);
    res.status(201).json(newJob);
};

// Function to update a job by ID
export const updateJob = (req, res) => {
    const jobId = parseInt(req.params.id);
    const { title, description, location } = req.body;
    const updatedJob = jobModel.updateJob(jobId, title, description, location);
    if (updatedJob) {
        res.json(updatedJob);
    } else {
        res.status(404).json({ message: "Job not found" });
    }
};

// Function to delete a job by ID
export const deleteJob = (req, res) => {
    const jobId = parseInt(req.params.id);
    const deletedJob = jobModel.deleteJob(jobId);
    if (deletedJob) {
        res.json({ message: "Job deleted successfully" });
    } else {
        res.status(404).json({ message: "Job not found" });
    }
};

// Function to process job application
export const processJobApplication = (req, res) => {
    const jobId = parseInt(req.params.id);
    const { name, email } = req.body;
    const resumePath = req.file.path;
    const applicant = jobModel.createApplicant(jobId, name, email, resumePath);
    if (applicant) {
        res.send("Job application received");
    } else {
        res.status(404).json({ message: "Job not found" });
    }
};
