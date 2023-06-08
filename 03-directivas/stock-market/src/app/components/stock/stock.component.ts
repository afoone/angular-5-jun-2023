import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent {
  public stocks: Stock[];

  constructor() {
    this.stocks = [
      new Stock('Telefonica', 'TEL', 85, 9),
      new Stock('Vodafone', 'VOD', 85, 90),
      new Stock('Orange', 'ORA', 85, 80),
      new Stock('Jazztel', 'JAZ', 85, 900),
    ];
  }

  getClass(stock: Stock): string {
    return stock.estado;
  }

  isMucho(stock: Stock): boolean {
    return Math.abs(stock.price - stock.previousPrice) > 10;
  }
}
