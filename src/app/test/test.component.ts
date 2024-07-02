import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  data: any[] = [
    { id: 1, name: 'Item 1', value: '100' },
    { id: 2, name: 'Item 2', value: '200' }
  ];

  exportAsExcel(): void {
    // Example data array
    const data = [{ name: 'Test1', score: 50 }, { name: 'Test2', score: 70 }];
  
    // Step 1: Convert JSON to worksheet
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  
    // Step 2: Create a workbook
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
  
    // Step 3: Write workbook and convert to buffer
    const wbout: ArrayBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
    // Step 4: Save to file
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'export.xlsx');
  }
}



