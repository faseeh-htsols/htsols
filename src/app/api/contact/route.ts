import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

type ContactPayload = {
  formType?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  city?: string;
  companyName?: string;
  contactNumber?: string;
  email: string;
  services?: string;
  message: string;
};

const templateMap: Record<string, string> = {
  "general-contact": "general-contact.hbs",
  "business-enquiry": "business-enquiry.hbs",
  "quote-request": "quote-request.hbs",
};

const subjectMap: Record<string, string> = {
  "general-contact": "New General Contact Enquiry",
  "business-enquiry": "New Business Enquiry",
  "quote-request": "New Quote Request",
};

export async function POST(req: Request) {
  try {
    const values = (await req.json()) as ContactPayload;

    const formType = values.formType || "general-contact";
    const templateFile = templateMap[formType] || "general-contact.hbs";
    const subject = subjectMap[formType] || "New Website Enquiry";

    const templatePath = path.join(
      process.cwd(),
      "src",
      "emails",
      "templates",
      templateFile
    );

    const templateSource = await fs.readFile(templatePath, "utf8");
    const compileTemplate = Handlebars.compile(templateSource);
    const html = compileTemplate(values);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      subject,
      html,
      replyTo: values.email,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      { status: 500 }
    );
  }
}