import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { name, email, comment } = await request.json();

    // Construct the message
    const msg = {
      to: 'joosep.viik@taltech.ee', // Your desired recipient
      from: 'info@renokratt.ee',  // Must be verified in your SendGrid account
      subject: `New Contact Form Submission on Renokratt.ee from ${name}`,
      text: comment,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      `,
    };

    // Send the email
    await sgMail.send(msg);

    // Return a success response
    return NextResponse.json({
      message: 'Form submitted successfully!',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
