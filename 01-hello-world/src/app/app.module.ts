import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CocheComponent } from './components/coche/coche.component';
import { CocheObjectComponent } from './components/coche-object/coche.component';
import { InterruptorComponent } from './components/interruptor/interruptor.component';

@NgModule({
  declarations: [
    AppComponent,
    CocheComponent,
    CocheObjectComponent,
    InterruptorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
