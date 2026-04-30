import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend lazily to avoid build-time errors when API key is not set
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error('RESEND_API_KEY environment variable is not configured');
  }
  return new Resend(key);
}

/** Escape HTML special characters to prevent XSS */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** Sanitize and truncate user input */
function sanitize(value: unknown, maxLength = 1000): string {
  if (typeof value !== 'string') return 'N/A';
  const trimmed = value.trim();
  if (!trimmed) return 'N/A';
  return escapeHtml(trimmed.slice(0, maxLength));
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    const vorname = sanitize(data.vorname, 100);
    const nachname = sanitize(data.nachname, 100);
    const email = sanitize(data.email, 200);
    const telefon = sanitize(data.telefon, 50);
    const geburtsdatum = sanitize(data.geburtsdatum, 20);
    const programm = sanitize(data.programm, 100);
    const nachricht = sanitize(data.nachricht, 2000);

    // Validate required fields
    if (vorname === 'N/A' || email === 'N/A') {
      return NextResponse.json(
        { error: 'Vorname und E-Mail sind Pflichtfelder.' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const result = await getResend().emails.send({
      from: 'onboarding@resend.dev', // Ensure this matches your verified domain later
      to: 'youthbridge@ejka.org',
      subject: `Neue Anmeldung von ${vorname} ${nachname}`,
      html: `
        <h2>Neue Anmeldung über die Website:</h2>
        <p><strong>Vorname:</strong> ${vorname}</p>
        <p><strong>Nachname:</strong> ${nachname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Geburtsdatum:</strong> ${geburtsdatum}</p>
        <p><strong>Programm:</strong> ${programm}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${nachricht}</p>
      `
    });

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
