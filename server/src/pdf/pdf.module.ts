import { Module } from '@nestjs/common';
import { PdfService } from './pdf/pdf.service';
import { PdfController } from './pdf/pdf.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule], 
  providers: [PdfService],
  controllers: [PdfController]
})
export class PdfModule {}
