const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mahazainab28@gmail.com',
        pass: ''
    }
});

app.post('/contact', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const mailOptions = {
        from: email,
        to: 'mahazainab28@gmail.com',
        subject: `Contact Form Submission from ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error); // Log the error
            res.status(500).json({ code: 500, message: 'Error sending message' });
        } else {
            console.log("Email sent:", info.response); // Log the response
            res.status(200).json({ code: 200, message: 'Message sent successfully' });
        }
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
