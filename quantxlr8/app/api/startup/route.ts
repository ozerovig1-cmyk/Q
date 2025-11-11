import { NextResponse } from 'next/server';

// POST handler for startup application submissions. Consumes JSON
// payloads and logs them on the server. Always returns a 200 OK
// response to the client. In a production environment this is
// where you would persist data or trigger notifications.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Startup application received:', body);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Error handling startup submission:', err);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}