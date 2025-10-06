import { toast } from 'react-toastify';

export const emailHandlerCPannel = async (emailParams: any) => {
  try {
    const response = await fetch("https://buluc.netlify.app/.netlify/functions/sendEmailCPannel", {
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
    console.log(error);
    console.log("Email nu a fost trimis!")
    toast.error("Ne pare rău, mesajul nu a fost trimis");
    throw error;
  }
};