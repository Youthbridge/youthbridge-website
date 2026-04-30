import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Send email using Resend
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev', // Ensure this matches your verified domain later
      to: 'youthbridge@ejka.org',
      subject: `New Contact Form Submission from ${data.vorname || 'Website'}`,
      html: `
        <h2>New Message Details:</h2>
        <p><strong>Vorname:</strong> ${data.vorname || 'N/A'}</p>
        <p><strong>Nachname:</strong> ${data.nachname || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Telefon:</strong> ${data.telefon || 'N/A'}</p>
        <p><strong>Geburtsdatum:</strong> ${data.geburtsdatum || 'N/A'}</p>
        <p><strong>Programm:</strong> ${data.programm || 'N/A'}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${data.nachricht || 'N/A'}</p>
      `
    });

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
