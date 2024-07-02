import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PdfTestComponent } from './pdf-test/pdf-test.component';
import { ExcelPdfTestComponent } from './excel-pdf-test/excel-pdf-test.component';
import { TodoDataService } from './todo-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PdfTestComponent,
    ExcelPdfTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
