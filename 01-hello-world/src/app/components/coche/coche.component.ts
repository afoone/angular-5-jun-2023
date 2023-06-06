import { Component } from "@angular/core";


@Component(
  {
    selector: 'nextraining-coche',
    template: `
      <h1> {{ marca }} </h1>
      <h2> {{ modelo }} </h2>
      <h3> {{ color }} </h3>
    `
  }
)
export class CocheComponent {
  marca: string;
  modelo: string;
  private _color: string;

  constructor() {
    this.marca = 'Seat';
    this.modelo = 'Ibiza';
    this._color = 'RED';
  }

  get color(): string {
    return this._color.toLowerCase();
  }
}
