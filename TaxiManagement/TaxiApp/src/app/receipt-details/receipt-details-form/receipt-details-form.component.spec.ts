import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptDetailsFormComponent } from './receipt-details-form.component';

describe('ReceiptDetailsFormComponent', () => {
  let component: ReceiptDetailsFormComponent;
  let fixture: ComponentFixture<ReceiptDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
