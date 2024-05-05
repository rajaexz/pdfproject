// src/pdf/pdf.controller.ts
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';
import { UserService } from '../../user/user/user.service';

@Controller('pdf')
export class PdfController {
  constructor(
    private readonly pdfService: PdfService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async generatePdf(@Res() res: Response): Promise<void> {
    const users = this.userService.getUsers();
    const pdfBuffer = this.pdfService.generatePdf(users);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=users.pdf');
    res.send(pdfBuffer);
  }
}
