import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import session from "express-session";
import multer from "multer";
import nodemailer from "nodemailer";
import routes from "./routes/index.js";


// Create Express app
const app = express();

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));

// Set views directory and view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// Set up nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password'
  }
});

// Middleware to attach nodemailer transporter to request object
app.use((req, res, next) => {
  req.transporter = transporter;
  next();
});

// Set up routes
app.use("/", routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
