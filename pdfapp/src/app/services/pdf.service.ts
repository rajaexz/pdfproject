// src/app/services/pdf.service.ts
import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  }


  generatePdf(users: User[]): void {
    // PDF generation logic
    const documentDefinition = {
      content: [
        { text: 'User Information', style: 'header' },
        // Add user data here
        ...users.map((user: User) => [
          { text: 'Name:', bold: true },
          { text: user.name },
          { text: 'Email:', bold: true },
          { text: user.email },
          { text: 'Phone Number:', bold: true },
          { text: user.phoneNumber },
          { text: 'Address:', bold: true },
          { text: user.address },
          { text: '--------------------------' } // Separator between users
        ])
      ],
      
    };
    pdfMake.createPdf(documentDefinition).open(); // Open PDF in a new window
  }


  downloadPdf(users: User[]): void {
    // PDF generation logic
    const documentDefinition = {
      content: [
        { text: 'User Information', style: 'header' },
        // Add user data here
        ...users.map((user: User) => [
          { text: 'Name:', bold: true },
          { text: user.name },
          { text: 'Email:', bold: true },
          { text: user.email },
          { text: 'Phone Number:', bold: true },
          { text: user.phoneNumber },
          { text: 'Address:', bold: true },
          { text: user.address },
          { text: '--------------------------' } // Separator between users
        ])
      ],
     
    };
  
    pdfMake.createPdf(documentDefinition).download('users.pdf'); // Trigger download
  }
}
