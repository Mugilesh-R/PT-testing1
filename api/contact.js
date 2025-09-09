import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.smtp.gmail.com,
  port: process.env.587,
  secure: process.env.false === 'true',
  auth: {
    user: process.env.'mugileshrammu001@gmail.com',
    pass: process.env.'Mugil@76679',
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, service, message } = req.body;
    const mailOptions = {
      from: email,
      to: process.env.'oneinfotamil@gmail.com',
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}