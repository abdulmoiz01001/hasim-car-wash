const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from localhost:5173
    methods: 'GET, POST', // Allow specific methods
  }));
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // use 'gmail' or the email provider you're using
  auth: {
    user: process.env.EMAIL_USER || "bdlmzwn2005@gmail.com",
    pass: process.env.EMAIL_PASS || "hiki pwge aljv qapk",
  },
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message , html } = req.body;
  console.log(req.body)

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact for Car Wash From ${name}`,
    text:  ``,
    html: ` <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6', margin: 0, padding: '20px' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)' }}>
      
      
      <div style={{ backgroundColor: '#dc2626', padding: '20px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', textAlign: 'center', color: '#ffffff' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Car Wash Service Inquiry</h1>
      </div>
      
     
      <div style={{ padding: '20px', color: '#111827' }}>
        <p style={{ fontSize: '16px', lineHeight: 1.5 }}>Hello,</p>
        <p style={{ fontSize: '16px', lineHeight: 1.5, marginBottom: '16px' }}>You have received a new inquiry for car wash services. Here are the details:</p>

     
        <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px', margin: '16px 0' }}>
          <p style={{ fontSize: '16px', margin: 0 }}><strong style={{ color: '#374151', display: 'inline-block', width: '100px' }}>Name:</strong> ${name}</p>
          <p style={{ fontSize: '16px', margin: 0 }}><strong style={{ color: '#374151', display: 'inline-block', width: '100px' }}>Email:</strong> ${email}</p>
          <p style={{ fontSize: '16px', marginTop: '8px' }}><strong style={{ color: '#374151', display: 'inline-block', width: '100px' }}>Message:</strong><br /> ${message}</p>
        </div>

        <p style={{ fontSize: '16px', lineHeight: 1.5 }}>Thank you,</p>
        <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#4b5563' }}>Your Car Wash Service Team</p>
      </div>

      <div style={{ backgroundColor: '#f9fafb', textAlign: 'center', padding: '12px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', fontSize: '14px', color: '#6b7280' }}>
        <p style={{ margin: 0 }}>This email was generated automatically. Please do not reply directly to this message.</p>
      </div>
      
    </div>
  </div>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
