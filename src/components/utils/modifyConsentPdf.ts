import { PDFDocument, rgb } from 'pdf-lib';

export interface ConsentParams {
  firstName: string;
  lastName: string;
  email: string;
  signature?: string | null;
}

export async function modifyConsentPdf(params: ConsentParams) {
  const { firstName, lastName, email, signature } = params;

  // Load the consent PDF template from public path
  const pdfUrl = '/consimtamant.pdf';
  const response = await fetch(pdfUrl);
  const existingPdfBytes = await response.arrayBuffer();

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page = pdfDoc.getPages()[0];

  // NOTE: Coordinates are approximate; adjust if template changes.
  // Draw name fields (nume + prenume) on the first page
  const textFields = [
    { text: `${lastName} ${firstName}`.trim(), x: 70, y: 660 },
    { text: email, x: 70, y: 640 },
  ];

  textFields.forEach((field) => {
    if (field.text) {
      page.drawText(field.text, {
        x: field.x,
        y: field.y,
        size: 11,
        color: rgb(0, 0, 0),
      });
    }
  });

  // Add signature image if available
  if (signature) {
    const signatureImageBytes = await fetch(signature).then((res) => res.arrayBuffer());
    const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
    const signatureDims = signatureImage.scale(0.35);

    // Place signature near the end of the document
    page.drawImage(signatureImage, {
      x: 320,
      y: 120,
      width: signatureDims.width,
      height: signatureDims.height,
    });
  }

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}
