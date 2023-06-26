import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasFormComponent } from './facturas-form.component';

describe('FacturasFormComponent', () => {
  let component: FacturasFormComponent;
  let fixture: ComponentFixture<FacturasFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturasFormComponent]
    });
    fixture = TestBed.createComponent(FacturasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
