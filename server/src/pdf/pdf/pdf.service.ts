// src/pdf/pdf.service.ts
import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { User } from '../../user/user.model';
import * as fs from 'fs';
@Injectable()
export class PdfService {
  generatePdf(users: User[]): Buffer {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('users.pdf'));

    doc.fontSize(16).text('User Information', { align: 'center' });

    users.forEach((user, index) => {
      doc.fontSize(12).text(`User ${index + 1}:`);
      doc.fontSize(10).text(`Name: ${user.name}`);
      doc.fontSize(10).text(`Email: ${user.email}`);
      doc.fontSize(10).text(`Phone Number: ${user.phoneNumber}`);
      doc.fontSize(10).text(`Address: ${user.address}`);
      doc.moveDown();
    });

    doc.end();
    return doc;
  }
}
