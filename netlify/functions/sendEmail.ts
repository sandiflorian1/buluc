import { Handler } from "@netlify/functions";
import SibApiV3Sdk from "sib-api-v3-sdk";

export const handler: Handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*", // Poți pune domeniul tău aici
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  // Pre-flight request pentru CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: ""
    };
  }

  try {
    if (!event.body) throw new Error("Missing request body");

    const data = JSON.parse(event.body);

    const { to_name, from_name, user_email, subject, message, form } = data;

    // Configurare API Brevo
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications["api-key"];
    if (!process.env.BREVO_API_KEY) throw new Error("Missing BREVO_API_KEY env variable");
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // Pregătim emailul cu attachment
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.to = [{ email: user_email, name: to_name }];
    sendSmtpEmail.sender = { email: "florianmaa@gmail.com", name: from_name };
    sendSmtpEmail.subject = subject || "Formular PDF";
    sendSmtpEmail.htmlContent = `<p>${message}</p>`;
    sendSmtpEmail.attachment = [
      {
        content: form.replace(/^data:application\/pdf;base64,/, ""),
        name: "formular.pdf",
        type: "application/pdf"
      }
    ];

    // Trimitem emailul
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true })
    };
  } catch (error: any) {
    console.error(error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};

