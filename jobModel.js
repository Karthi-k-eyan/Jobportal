// models/jobModel.js

// Sample in-memory database for jobs
let jobs = [
    { id: 1, title: "Software Engineer", description: "Develop software applications", location: "Remote", applicants: [] },
    { id: 2, title: "Web Developer", description: "Build websites", location: "Office", applicants: [] },
];

// Function to get all jobs
export const getAllJobs = () => {
    return jobs;
};

// Function to get a job by ID
export const getJobById = (jobId) => {
    return jobs.find(job => job.id === jobId);
};

// Function to create a new job
export const createJob = (title, description, location) => {
    const id = jobs.length + 1;
    const newJob = { id, title, description, location, applicants: [] };
    jobs.push(newJob);
    return newJob;
};

// Function to update a job by ID
export const updateJob = (jobId, title, description, location) => {
    const jobIndex = jobs.findIndex(job => job.id === jobId);
    if (jobIndex !== -1) {
        jobs[jobIndex] = { ...jobs[jobIndex], title, description, location };
        return jobs[jobIndex];
    } else {
        return null;
    }
};

// Function to delete a job by ID
export const deleteJob = (jobId) => {
    const jobIndex = jobs.findIndex(job => job.id === jobId);
    if (jobIndex !== -1) {
        jobs.splice(jobIndex, 1);
        return true;
    } else {
        return false;
    }
};

// Function to add an applicant to a job
export const createApplicant = (jobId, name, email, resumePath) => {
    const job = jobs.find(job => job.id === jobId);
    if (job) {
        const applicant = { name, email, resumePath };
        job.applicants.push(applicant);
        return applicant;
    } else {
        return null;
    }
};
