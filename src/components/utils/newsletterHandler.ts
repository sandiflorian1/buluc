import { toast } from 'react-toastify';

export const newsletterHandler = async (params: { name: string; email: string; company?: string }) => {
  try {
    const response = await fetch("https://buluc.netlify.app/.netlify/functions/subscribeNewsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Te-ai abonat cu succes la newsletter!");
    } else {
      throw new Error(result.error || "Failed to subscribe");
    }
  } catch (error) {
    console.error(error);
    toast.error("Ne pare rău, abonarea nu a reușit. Încearcă din nou.");
    throw error;
  }
};
