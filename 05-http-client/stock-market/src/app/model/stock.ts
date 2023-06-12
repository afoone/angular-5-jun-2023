export class Stock {
  public name: string; // Telefonica
  public code: string; // TEF
  public price: number; // 10
  public previousPrice: number; // 20

  constructor(
    name: string,
    code: string,
    price: number,
    previousPrice: number = 0
  ) {
    this.name = name;
    this.code = code;
    this.price = price;
    this.previousPrice = previousPrice;
  }

  // Getter del estado
  get estado(): 'up' | 'down' | 'even' {
    return this.price > this.previousPrice
      ? 'up'
      : this.price < this.previousPrice
      ? 'down'
      : 'even';
  }

  getEstado(): 'up' | 'down' | 'even' {
    return this.price > this.previousPrice
      ? 'up'
      : this.price < this.previousPrice
      ? 'down'
      : 'even';
  }

}
