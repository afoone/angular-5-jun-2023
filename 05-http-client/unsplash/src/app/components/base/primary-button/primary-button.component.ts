import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  template: `
    <button class="ui primary button" (click)="onClick()" >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      .primary {
        color: white;
        background-color: cornflowerblue;
        padding: 10px;
        height: 40px;
        border-radius: 20px;
      }
    `,
  ],
})
export class PrimaryButtonComponent {
  @Input('text')
  text: string = '';

  @Output('click')
  private _click: EventEmitter<void> = new EventEmitter();

  onClick() {
    this._click.emit();
  }
}
