


import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf-test',
  templateUrl: './pdf-test.component.html',
  styleUrl: './pdf-test.component.scss'
})
export class PdfTestComponent {

  generatePDF() {
    const doc = new jsPDF();

    // 添加文本到 PDF
    doc.text('Hello world!', 10, 10);

    // 生成 PDF 并通过浏览器下载
    doc.save('example.pdf');
  }
}
