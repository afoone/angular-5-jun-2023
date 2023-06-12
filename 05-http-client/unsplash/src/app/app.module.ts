import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { PrimaryButtonComponent } from './components/base/primary-button/primary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageItemComponent,
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
