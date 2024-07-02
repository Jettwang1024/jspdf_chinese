import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelPdfTestComponent } from './excel-pdf-test.component';

describe('ExcelPdfTestComponent', () => {
  let component: ExcelPdfTestComponent;
  let fixture: ComponentFixture<ExcelPdfTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcelPdfTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcelPdfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
