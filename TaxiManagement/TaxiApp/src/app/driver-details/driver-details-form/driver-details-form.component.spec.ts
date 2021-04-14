import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDetailsFormComponent } from './driver-details-form.component';

describe('DriverDetailsFormComponent', () => {
  let component: DriverDetailsFormComponent;
  let fixture: ComponentFixture<DriverDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
