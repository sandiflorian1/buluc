import { toast } from 'react-toastify';

export const emailHandlerNetlify = async (emailParams: any) => {
  try {
    const response = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailParams)
    });

    const result = await response.json();

    if (result.success) {
      console.log("Email trimis cu succes!")
      toast.success("Mesajul a fost trimis cu succes!");
    } else {
      throw new Error(result.error || "Failed to send email");
    }
  } catch (error) {
    console.error(error);
    console.log("Email nu a fost trimis!")
    toast.error("Ne pare rău, mesajul nu a fost trimis");
    throw error;
  }
};