import { PDFDocument, rgb } from 'pdf-lib';
import { getCurrentDateTimeAsNumber, getFormattedDate } from './dateUtils';

export interface ConsentParams {
  name: string;
  email: string;
  phone: string;
  address: string;
  signature?: string | null;
}

export async function modifyAdvConsentPdf(params: ConsentParams) {
  const { name, phone, email, signature, address } = params;
  const dateNumber = getCurrentDateTimeAsNumber();
  const formattedDate = getFormattedDate();

  // Load the consent PDF template from public path
  const pdfUrl = '/consimtamant-avansati.pdf';
  const response = await fetch(pdfUrl);
  const existingPdfBytes = await response.arrayBuffer();

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page1 = pdfDoc.getPages()[0];
  const page2 = pdfDoc.getPages()[1];
  const page3 = pdfDoc.getPages()[2];
  const nrDoc = `Nr. ${dateNumber} / ${formattedDate}`;

  // NOTE: Coordinates are approximate; adjust if template changes.
  // Draw name fields (nume + prenume) on the first page
  const textFields = [
    { text: name, x: 240, y: 658 },
    { text: phone, x: 390, y: 644 },
    { text: address, x: 100, y: 645 },
    { text: email, x: 100, y: 632 },
  ];

  // Page 1
  textFields.forEach((field) => {
    if (field.text) {
      page1.drawText(field.text, {
        x: field.x,
        y: field.y,
        size: 11,
        color: rgb(0, 0, 0),
      });
    }
  });

  page1.drawText(nrDoc, { x: 243, y: 685, size: 10, color: rgb(0, 0, 0)});

  // Page 2
  page2.drawText(nrDoc, { x: 248, y: 233, size: 10, color: rgb(0, 0, 0)});

  // Add signature image if available
  if (signature) {
    const signatureImageBytes = await fetch(signature).then((res) => res.arrayBuffer());
    const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
    const signatureDims = signatureImage.scale(0.35);

    // Place signature near the end of the document
    page3.drawImage(signatureImage, {
      x: 390,
      y: 485,
      width: signatureDims.width,
      height: signatureDims.height,
    });
  }

  const pdfBytes = await pdfDoc.save();
      // The Uint8Array's buffer from pdf-lib can be a SharedArrayBuffer, which is not allowed in Blob.
  // Slicing the Uint8Array itself creates a new Uint8Array with a new ArrayBuffer that is not shared.
  const arrayBuffer = pdfBytes.slice().buffer;
  return new Blob([arrayBuffer], { type: 'application/pdf' });
}
