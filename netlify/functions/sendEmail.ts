import { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const handler: Handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*", // sau domeniul tău ex: "https://buluc.ro"
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // 🔹 Pre-flight request pentru CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    if (!event.body) throw new Error("Missing request body");

    const data = JSON.parse(event.body);

    const { user_email, subject, message, form } = data;

    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY env variable");
    }

    // 🔹 Construim atașamentul PDF
    const attachments = form
      ? [
          {
            filename: "consimtamant.pdf",
            content: form.replace(/^data:application\/pdf;base64,/, ""),
            encoding: "base64",
          },
        ]
      : [];

    // 🔹 Trimitem emailul
    const { data: result, error } = await resend.emails.send({
      from: `Asociatia Buluc <onboarding@resend.dev>`, 
      to: [user_email],
      subject: subject || "Formular PDF",
      html: `<p>${message}</p>`,
      attachments,
    });

    if (error) {
      throw new Error(error.message);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, result }),
    };
  } catch (error: any) {
    console.error(error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
