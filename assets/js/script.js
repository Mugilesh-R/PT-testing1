

// Add animation to loan cards
$(document).ready(function() {
  $('.loan-card').addClass('animated fadeInUp');
});

const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const service = req.body.service;
  const message = req.body.message;

  // Send email
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "mugileshrammu001@gmail.com",
      pass: "Mugil@76679",
    },
  });
  const mailOptions = {
    from: "mugileshrammu001@gmail.com",
    to: "mugileshrammu001@gmail.com",
    subject: "Lead from Website",
    text: `Name: ${name}\nEmail: ${email}\nType of Loan: ${service}\nMessage: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  // Send WhatsApp message
  const whatsappNumber = "+917667924881";
  const whatsappMessage = `Lead from Website\n\n*Name:* ${name}\n*Email:* ${email}\n*Type of Loan:* ${service}\n*Message:* ${message}`;
  // Use a WhatsApp API to send the message

  // Display thank you message
  res.send("<h2>Thank you for submitting the form!</h2>");
});