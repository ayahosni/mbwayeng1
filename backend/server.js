const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Parse incoming request bodies as JSON
app.use(bodyParser.json());

// Configure the email transport service
let transporter = nodemailer.createTransport({
  service: 'gmail', // You can use another email service
  auth: {
    user: 'ayahosni@4816@gmail.com', // Replace with your email address
    pass: 'ayahosni@2000' // Replace with your email password
  }
});

// Route to handle sending emails
app.post('/send-email', (req, res) => {
  // Extract data from the request body
  const { name, email, phone, message } = req.body;

  // Validate the incoming data
  if (!name || !email || !phone || !message) {
    return res.status(400).send('Please fill in all required fields.');
  }

  // Email content
  let mailOptions = {
    from: email, // The client's email address
    to: 'info@mbwayeng.com', // Replace with the company's email address
    subject: 'New Message from Contact Us Page',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email. Please try again later.');
    } else {
      console.log('Email sent successfully:', info.response);
      res.status(200).send('Your message has been sent successfully!');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});