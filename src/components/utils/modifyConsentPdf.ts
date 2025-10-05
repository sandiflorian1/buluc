import { PDFDocument, rgb } from 'pdf-lib';
import { getCurrentDateTimeAsNumber, getFormattedDate } from './dateUtils';

export interface ConsentParams {
  name: string;
  email: string;
  phone: string;
  period: '1' | '2';
  signature?: string | null;
}

export async function modifyConsentPdf(params: ConsentParams) {
  const { name, phone, period, email, signature } = params;
  const dateNumber = getCurrentDateTimeAsNumber();
  const formattedDate = getFormattedDate();

  // Load the consent PDF template from public path
  const pdfUrl = '/consimtamant.pdf';
  const response = await fetch(pdfUrl);
  const existingPdfBytes = await response.arrayBuffer();

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page1 = pdfDoc.getPages()[0];
  const page2 = pdfDoc.getPages()[1];
  const nrDoc = `Nr. ${dateNumber} / ${formattedDate}`;

  // NOTE: Coordinates are approximate; adjust if template changes.
  // Draw name fields (nume + prenume) on the first page
    const textFields = [
    { text: nrDoc, x: 220, y: 700 },
    { text: name, x: 270, y: 650 },
    { text: phone, x: 110, y: 634 },
    { text: email, x: 260, y: 634 },
    { text: period === '1' ? 'X' : ' ', x: 129, y: 172 },
    { text: period === '2' ? 'X' : ' ', x: 129, y: 150 },

  ];

  // Page 1
  textFields.forEach((field) => {
    if (field.text) {
      page1.drawText(field.text, {
        x: field.x,
        y: field.y,
        size: 12,
        color: rgb(0, 0, 0),
      });
    }
  });

  // Page 2
  page2.drawText(nrDoc, { x: 220, y: 700, size: 12, color: rgb(0, 0, 0)});

  // Add signature image if available
  if (signature) {
    const signatureImageBytes = await fetch(signature).then((res) => res.arrayBuffer());
    const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
    const signatureDims = signatureImage.scale(0.35);

    // Place signature near the end of the document
    page2.drawImage(signatureImage, {
      x: 390,
      y: 150,
      width: signatureDims.width,
      height: signatureDims.height,
    });
  }

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}
