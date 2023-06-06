import { Component } from '@angular/core';

@Component({
  selector: 'nextraining-interruptor',
  templateUrl: './interruptor.component.html',
  styleUrls: ['./interruptor.component.css']
})
export class InterruptorComponent {

  // estadoLuz: string;

  isON: boolean;

  constructor() {
    this.isON = true;
    // this.estadoLuz = 'ON';
  }

  toggleLight(event: MouseEvent) {
    console.log('Toggle light', {event})

    // this.estadoLuz = this.estadoLuz === 'ON' ? 'OFF' : 'ON';
    this.isON = !this.isON
  }

}
