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
    const { to, subject, message, form } = JSON.parse(event.body);

    // Configurare SMTP din cPanel
    const transporter = nodemailer.createTransport({
      host: "mail.buluc.ro",
      port: 465,
      secure: true,
      auth: {
        user: "buluc@buluc.ro",
        pass: process.env.CPANEL_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Challenge Yourself" <buluc@buluc.ro>`,
      to,
      subject,
      html: `<p>${message}</p>`,
      attachments: [
        {
          filename: "formular.pdf",
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
