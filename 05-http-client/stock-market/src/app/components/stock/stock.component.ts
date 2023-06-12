import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit{

  @Input('stock')
  public stock: Stock|undefined;

  @Output('delete')
  public delete: EventEmitter<string> = new EventEmitter()

  constructor() {
    console.log("constructor",{stock: this.stock})
  }

  ngOnInit(): void {
    console.log("oninit",{stock: this.stock})
  }

  getClass(stock: Stock): string {
    return stock.estado;
  }

  isMucho(stock: Stock): boolean {
    return Math.abs(stock.price - stock.previousPrice) > 10;
  }

  onDeleteClick() {
    console.log('clicked')
    this.delete.emit(this.stock?.code)
  }
}


// ciclo de vida de un componente
// constructor - oninit - onchanges - ondestroy
// los inputs ESTÁN RECIBIDOS en on init, pero en el constructor todavía no
