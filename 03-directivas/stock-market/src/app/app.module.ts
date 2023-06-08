import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockComponent } from './components/stock/stock.component';
import { SubrayadoDirective } from './directives/subrayado.directive';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    SubrayadoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
