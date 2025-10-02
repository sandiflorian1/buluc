import { Handler } from "@netlify/functions";
import SibApiV3Sdk from "sib-api-v3-sdk";

const handler: Handler = async (event) => {
  try {
    const { to, subject, message, filename, fileBase64 } = JSON.parse(event.body || "{}");

    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY as string;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const email = {
      sender: { email: "florianmaa@gmail.com" },
      to: [{ email: to }],
      subject,
      htmlContent: `<p>${message}</p>`,
      attachment: [{ name: filename, content: fileBase64 }],
    };

    const resp = await apiInstance.sendTransacEmail(email);

    return { statusCode: 200, body: JSON.stringify({ success: true, data: resp }) };
  } catch (err: any) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: err.message }) };
  }
};

export { handler };
