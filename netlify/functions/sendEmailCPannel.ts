import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

export const handler: Handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    if (!event.body) throw new Error("Missing request body");
    const { to, subject, message, form, user_email } = JSON.parse(event.body);

    // Configurare SMTP din cPanel
    const transporter = nodemailer.createTransport({
      host: "mail.buluc.org",
      port: 465,
      secure: true,
      auth: {
        user: "buluc@buluc.org",
        pass: process.env.CPANEL_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Challenge Yourself" <buluc@buluc.org>`,
      to,
      subject,
      html: `<p>${message}</p>`,
      attachments: [
        {
          filename: "consimtamant.pdf",
          content: form.replace(/^data:application\/pdf;base64,/, ""),
          encoding: "base64",
        },
      ],
    });

    const arhivaEmailHTML = `<p> Cursantul ${user_email}, cu email-ul ${to}, a semnat consimțământul.</p>`

    await transporter.sendMail({
      from: `"Challenge Yourself" <buluc@buluc.org>`,
      to: 'buluc.arhiva@gmail.com',
      subject,
      html: arhivaEmailHTML,
      attachments: [
        {
          filename: "consimtamant.pdf",
          content: form.replace(/^data:application\/pdf;base64,/, ""),
          encoding: "base64",
        },
      ],
    });

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (error: any) {
    console.error(error);
    return { statusCode: 500, headers, body: JSON.stringify({ success: false, error: error.message }) };
  }
};
