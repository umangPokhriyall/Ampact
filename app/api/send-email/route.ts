import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
    name: string;
    number: string;
    city: string;
    businessName: string;
    email: string;
    helpWith: string;
}

export async function POST(request: Request) {
    const formData: FormData = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: 'New Call Booking Request',
        text: `
            Name: ${formData.name}
            Number: ${formData.number}
            City: ${formData.city}
            Business Name: ${formData.businessName}
            Email: ${formData.email}
            Help With: ${formData.helpWith}
        `,
        replyTo: formData.email, // Sets the reply address to the user's email
    };


    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
