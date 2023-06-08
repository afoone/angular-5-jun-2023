import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent {
  public stocks: Stock[];

  constructor() {
    this.stocks = [
      new Stock('Telefonica', 'TEL', 85, 9),
      new Stock('Vodafone', 'VOD', 85, 90),
      new Stock('Orange', 'ORA', 85, 80),
      new Stock('Jazztel', 'JAZ', 85, 900),
    ];
  }

  onDelete(code: string) {
    console.log('delete'+code)
    this.stocks = this.stocks.filter(
      s => s.code !== code
    )
  }
}
