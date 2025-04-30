require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Allow cross-origin requests from your frontend
app.use(bodyParser.json()); // Parse incoming JSON data

// POST endpoint to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, phone, message } = req.body;

  // Create a transporter using your company email SMTP details
  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, // Email password or app password
    },
  });

  // Define the email options
  const mailOptions = {
    from: email, // The sender's email (the user's email)
    to: "e.marketing.eecc@gmail.com", // Your company email as the recipient
    subject: `New contact form submission from ${name}`,
    text: `
            You have received a new message from the EECC factory Website Contact Form.

            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({success: false, message: "Error Sending Mail"});
    }
    return res.status(200).json({success: true, message: "Email Sent Successfully"});
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
