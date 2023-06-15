import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaFacturaComponent } from './nueva-factura.component';

describe('NuevaFacturaComponent', () => {
  let component: NuevaFacturaComponent;
  let fixture: ComponentFixture<NuevaFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaFacturaComponent]
    });
    fixture = TestBed.createComponent(NuevaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
