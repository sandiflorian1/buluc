import { PDFDocument, rgb } from 'pdf-lib';

// Function to draw CNP with individual spacing between digits
const drawCNP = (page: any, cnp: string, startX: number, y: number) => {
  if (!cnp) return;

  const digits = cnp.split('');
  digits.forEach((digit, index) => {
    page.drawText(digit, {
      x: startX + (index * 18.5),
      y,
      size: 11,
      color: rgb(0, 0, 0),
    });
  });
};

export async function modifyPdf(params: any) {
  const {
    firstName,
    lastName,
    firstLetter,
    cnp,
    email, 
    phone,
    street,
    number,
    building,
    sc,
    floor,
    apt,
    county,
    city,
    zipCode,
    signature,
  } = params;

  // Load the PDF template
  const pdfUrl = '/form230.pdf'; 
  const response = await fetch(pdfUrl);
  const existingPdfBytes = await response.arrayBuffer();

  // Load PDF document
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page = pdfDoc.getPages()[0];

  // Add other fields to PDF
  const textFields = [
    { text: firstName, x: 65, y: 660 },
    { text: lastName, x: 65, y: 682 },
    { text: firstLetter, x: 295, y: 682 },
    { text: street, x: 65, y: 637 },
    { text: number, x: 288, y: 637 },
    { text: building, x: 47, y: 615 },
    { text: sc, x: 108, y: 615 },
    { text: floor, x: 147, y: 615 },
    { text: apt, x: 184, y: 615 },
    { text: county, x: 255, y: 615 },
    { text: city, x: 68, y: 593 },
    { text: zipCode, x: 264, y: 593 },
    { text: email, x: 364, y: 649 },
    { text: phone, x: 364, y: 622 },
  ];

  // Draw text fields
  textFields.forEach(field => {
    if (field.text) {
      page.drawText(field.text, {
        x: field.x,
        y: field.y,
        size: 11,
        color: rgb(0, 0, 0),
      });
    }
  });

  // Draw CNP with individual spacing
  drawCNP(page, cnp, 337, 673);

    // Add signature to PDF
  if (signature) {
    // Convert base64 to uint8array to add to PDF
    const signatureImageBytes = await fetch(signature).then(res => res.arrayBuffer());
    const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
    
    // Add signature to PDF
    const signatureDims = signatureImage.scale(0.3); // Scale signature to 50% of original size
    page.drawImage(signatureImage, {
      x: 160,
      y: 135, // Adjust position as needed
      width: signatureDims.width,
      height: signatureDims.height,
    });
  }

  // Save changes
  const pdfBytes = await pdfDoc.save();

  return new Blob([pdfBytes], { type: 'application/pdf' });
}