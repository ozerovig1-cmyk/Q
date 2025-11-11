import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Investor application received:', body);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Error handling investor submission:', err);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}