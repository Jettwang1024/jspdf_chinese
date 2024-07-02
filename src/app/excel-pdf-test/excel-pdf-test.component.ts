import { Component, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';
import { TodoDataService } from '../todo-data.service';
import { TODO } from '../@models/todo.model';
import { jsPDF } from 'jspdf';
import {myFontData} from './font';
declare var pdfAddFont: any; // This function is provided in your custom .js font file
@Component({
  selector: 'app-excel-pdf-test',
  templateUrl: './excel-pdf-test.component.html',
  styleUrls: ['./excel-pdf-test.component.scss'],
})
export class ExcelPdfTestComponent {
  @ViewChild('pdfTable') pdfTable!: ElementRef;
  myfont : string = myFontData;
  constructor(private todoDataService: TodoDataService) {}

  downloadFile(format: string): void {
    if (format === 'excel') {
      this.exportAsExcel();
    } else if (format === 'pdf') {
      this.exportAsPDF();
    }
  }

  exportAsExcel(): void {
    const dataToExport = this.todoDataService.getTodoList();
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    const wbout: ArrayBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    saveAs(
      new Blob([wbout], { type: 'application/octet-stream' }),
      'todolist.xlsx'
    );
  }

  exportAsPDF(): void {
    this.createPDF();
  }

  createPDF(): void {
    
    const dataToExport = this.todoDataService.getTodoList(); // 获取待办事项数据

    const doc = new jsPDF();
    
    // Example of adding a font directly (this should be your actual Base64 string)
    const fontBase64 = this.myfont;
    doc.addFileToVFS('NotoSansTC-VariableFont_wght-normal.ttf', fontBase64);
    doc.addFont('NotoSansTC-VariableFont_wght-normal.ttf',
    'NotoSansTC-VariableFont_wght',
    'normal');
    
    doc.setFont('NotoSansTC-VariableFont_wght');
  // 设置起始位置
  let y = 10;

  // 添加表头
  doc.text('代辦事項', 10, y);
  y += 10;

  // 遍历数据并添加到 PDF
  for (let item of dataToExport) {
    doc.text(item.Thing, 10, y); // 假设待办事项对象有一个 'name' 属性
    y += 10; // 增加 y 坐标，以避免文本重叠
    if (y > 280) { // 防止内容超出页面范围
      doc.addPage();
      y = 10; // 重置 y 坐标到新页面的顶部
    }
  }

  // 保存 PDF 文件
  doc.save('todolist.pdf');


  }
}
