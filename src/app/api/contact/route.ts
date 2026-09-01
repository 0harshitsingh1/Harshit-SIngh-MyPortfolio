import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Contact form submission:", data);
    
    // Placeholder for email sending logic (e.g. Resend, SendGrid)
    
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 }
    );
  }
}
