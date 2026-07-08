import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { user_name, user_email, message } = await request.json();

    if (!user_name || !user_email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Default to a fallback email address if RESEND_TO_EMAIL is not configured
    const toEmail = process.env.RESEND_TO_EMAIL || "pratik.t.dev@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <contact@pratikt.in>",
      to: [toEmail],
      subject: `New Portfolio Message from ${user_name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #111; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;">New Message from Portfolio Contact Form</h2>
          <p style="font-size: 16px; margin: 10px 0;"><strong>Name:</strong> ${user_name}</p>
          <p style="font-size: 16px; margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${user_email}" style="color: #7814f7; text-decoration: none;">${user_email}</a></p>
          <p style="font-size: 16px; margin: 15px 0 5px 0;"><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap; border-left: 4px solid #7814f7; font-size: 15px; line-height: 1.6; color: #444;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
