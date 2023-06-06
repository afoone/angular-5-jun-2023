import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptorComponent } from './interruptor.component';

describe('InterruptorComponent', () => {
  let component: InterruptorComponent;
  let fixture: ComponentFixture<InterruptorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterruptorComponent]
    });
    fixture = TestBed.createComponent(InterruptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
