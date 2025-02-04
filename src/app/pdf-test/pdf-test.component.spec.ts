import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfTestComponent } from './pdf-test.component';

describe('PdfTestComponent', () => {
  let component: PdfTestComponent;
  let fixture: ComponentFixture<PdfTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
