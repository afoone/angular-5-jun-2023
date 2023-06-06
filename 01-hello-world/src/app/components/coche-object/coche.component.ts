import { Component } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'nextraining-coche-object',
  template: `
    <h1 [id]="coche.marca">{{ coche.marca }}</h1>
    <h2>{{ coche.modelo }}</h2>
  `,
})
export class CocheObjectComponent {
  coche: Coche;
  constructor() {
    this.coche = {
      marca: 'Seat',
      modelo: 'Ibiza',
      color: 'RED',
    };
  }
}
