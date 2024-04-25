// middleware/upload.js

import multer from "multer";

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Initialize Multer
const uploadMiddleware = multer({ storage: storage });

export default uploadMiddleware;
