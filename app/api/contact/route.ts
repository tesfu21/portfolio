import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // ── Basic validation ──────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // ── Nodemailer transporter (Gmail SMTP port 587) ──
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // false for port 587 (STARTTLS), true for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ── Email content ─────────────────────────────
    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: monospace; max-width: 600px; padding: 2rem; background: #0b0c10; color: #e8e4dc; border: 1px solid rgba(201,162,82,0.3);">
          <h2 style="color: #c9a252; font-size: 1.2rem; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(201,162,82,0.2); padding-bottom: 1rem;">
            New Portfolio Message
          </h2>
          <p style="margin-bottom: 0.5rem;"><strong style="color:#c9a252;">Name:</strong> ${name}</p>
          <p style="margin-bottom: 0.5rem;"><strong style="color:#c9a252;">Email:</strong> ${email}</p>
          <p style="margin-top: 1.5rem; margin-bottom: 0.5rem;"><strong style="color:#c9a252;">Message:</strong></p>
          <p style="color: #9a9488; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
