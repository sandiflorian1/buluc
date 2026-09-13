import { Handler } from "@netlify/functions";

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

    const { name, email, company } = JSON.parse(event.body);

    // Honeypot: botii completeaza campul ascuns "company", noi raspundem ok fara sa abonam
    if (company) {
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: "Invalid email" }),
      };
    }

    if (!process.env.BREVO_API_KEY) {
      throw new Error("Missing BREVO_API_KEY env variable");
    }

    const listId = Number(process.env.BREVO_LIST_ID);

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name || "" },
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    // 201 = creat, 204 = actualizat
    if (response.status === 201 || response.status === 204) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true }),
      };
    }

    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Brevo API error: ${response.status}`);
  } catch (error: any) {
    console.error(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
