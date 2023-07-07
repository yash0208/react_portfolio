const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3001; // or any other port you prefer

app.use(express.json());

// Define a route to handle email sending
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'YourEmailService',
        auth: {
            user: 'YourEmailAddress',
            pass: 'YourEmailPassword',
        },
    });

    // Set up the email details
    const mailOptions = {
        from: email,
        to: 'YourEmailAddress', // Replace with the email address you want to receive emails
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
