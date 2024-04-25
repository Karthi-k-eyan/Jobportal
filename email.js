// middleware/email.js

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Your Gmail email address
    pass: 'your_password' // Your Gmail password
  }
});

const sendEmailMiddleware = (req, res, next) => {
  const { email, jobTitle } = req.body;

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Job Application Confirmation',
    text: `Thank you for applying for the job '${jobTitle}'. Your application has been received.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, message: "Email sent successfully" });
    }
  });
};

export default sendEmailMiddleware;
