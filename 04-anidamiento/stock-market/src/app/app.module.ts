import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockComponent } from './components/stock/stock.component';
import { SubrayadoDirective } from './directives/subrayado.directive';
import { StockListComponent } from './components/stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    SubrayadoDirective,
    StockListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
