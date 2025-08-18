import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Type for the request body
interface ContactFormData {
  name: string;
  email: string;
  country: string;
  service: string;
  description: string;
  recipient: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, country, service, description, recipient } = body;

    // Validate required fields
    if (!name || !email || !country || !service || !description || !recipient) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // SSL port
      secure: true, // true for port 465, false for port 587
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // App Password
      },
    });

    const senderEmail = process.env.GMAIL_USER;

    // admin email
    const adminMailOptions = {
      from: `"Design and Developer Hub" <${senderEmail}>`,
      to: recipient,
      subject: `📩 New Contact Form Submission: ${service}`,
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
      <!-- Banner / Logo -->
      <div style="background-color: #2F4F4F; padding: 15px; text-align: center; color: white;">
        <img src="https://design-and-developers-hub.vercel.app/favicon.png" 
             alt="Design and Developer Hub" 
             style="height: 50px; display: inline-block; vertical-align: middle; margin-right: 10px;" />
        <span style="font-size: 18px; font-weight: bold;">Design and Developer Hub</span>
      </div>

      <!-- Message content -->
      <div style="padding: 20px;">
        <h2 style="color: #2F4F4F;">New Contact Form Submission</h2>
        <hr style="border: 1px solid #ddd;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Description:</strong><br>${description.replace(
          /\n/g,
          "<br>"
        )}</p>
        <hr style="border: 1px solid #ddd;" />
        <p style="font-size: 0.9em; color: #555;">This message was sent automatically from your website contact form.</p>
      </div>
    </div>
  `,
    };

    // user email
    const userMailOptions = {
      from: `"Design and Developer Hub" <${senderEmail}>`,
      to: email,
      subject: "✅ We've received your message!",
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
      <!-- Banner / Logo -->
      <div style="background-color: #2F4F4F; padding: 15px; text-align: center; color: white;">
        <img src="https://design-and-developers-hub.vercel.app/favicon.png" 
             alt="Design and Developer Hub" 
             style="height: 50px; display: inline-block; vertical-align: middle; margin-right: 10px;" />
        <span style="font-size: 18px; font-weight: bold;">Design and Developer Hub</span>
      </div>

      <!-- Message content -->
      <div style="padding: 20px;">
        <h2 style="color: #2F4F4F;">Hi ${name},</h2>
        <p>Thank you for reaching out to us regarding <strong>${service}</strong>.</p>
        <p>We have received your message and our team will review it shortly.</p>
        <p>We aim to respond as quickly as possible. Meanwhile, feel free to explore our website for more services and updates.</p>
        <a href="https://design-and-developers-hub.vercel.app" 
           style="display: inline-block; padding: 10px 20px; background-color: #2F4F4F; color: white; text-decoration: none; border-radius: 5px; margin-top: 15px;">
          Visit Our Website
        </a>
        <p style="margin-top: 20px;">— <strong>The Design and Developer Hub Team</strong></p>
      </div>
    </div>
  `,
    };

    try {
      // Send emails
      await transporter.sendMail(adminMailOptions);
      console.log("Admin email sent ✅");

      await transporter.sendMail(userMailOptions);
      console.log("User email sent ✅");
    } catch (err) {
      console.error("SMTP error:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully to Admin and User!",
    });
  } catch (error) {
    console.error("SMTP error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        details: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
