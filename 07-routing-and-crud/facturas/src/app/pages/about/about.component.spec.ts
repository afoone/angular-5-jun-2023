import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [FormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update property value on button click with the value of input', () => {
    const button = fixture.debugElement.query(By.css('[data-testid="submit-button"]'));
    const input = fixture.debugElement.query(By.css('[data-testid="input-field"]'));
    const p = fixture.debugElement.query(By.css('[data-testid="data-paragraph"]'));

    input.nativeElement.value = 'test';
    // simular la interacción del usuario
    input.nativeElement.dispatchEvent(new Event('input'));
    button.nativeElement.click();
    fixture.detectChanges();

    expect(p.nativeElement.textContent).toBe('test');

  });
});
