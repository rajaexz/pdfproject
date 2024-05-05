import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
 
  selector: 'app-pdf-viewer',
 
  templateUrl: './pdf-viewer.component.html',
  styleUrls: [ './pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit{
  pdfUrl: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pdfUrl = params['pdfUrl'];
    });
  }
  
}
