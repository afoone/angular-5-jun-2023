import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  inputValue = '';

  dataValue = '';

  copiar() {
    console.log('copiar', this.inputValue, this.dataValue);
    this.dataValue = this.inputValue;
  }
}
