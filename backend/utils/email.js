import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Create a transporter using Mailtrap
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 2525,
    auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD
    }
});

// Function to send welcome email
export const sendWelcomeEmail = async (email, fullname) => {
    try {
        const mailOptions = {
            from: '"Job Portal" <noreply@jobportal.com>',
            to: email,
            subject: 'Welcome to Job Portal!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Welcome to Job Portal!</h2>
                    <p>Dear ${fullname},</p>
                    <p>Thank you for registering with us. We're excited to have you on board!</p>
                    <p>With your account, you can:</p>
                    <ul>
                        <li>Browse and apply for jobs</li>
                        <li>Create and manage your profile</li>
                        <li>Track your job applications</li>
                    </ul>
                    <p>If you have any questions, feel free to reach out to our support team.</p>
                    <p>Best regards,<br>The Job Portal Team</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('Welcome email sent successfully');
    } catch (error) {
        console.error('Error sending welcome email:', error);
        throw error;
    }
}; 