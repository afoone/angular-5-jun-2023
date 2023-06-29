import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ListaFacturasComponent } from './pages/facturas/lista-facturas/lista-facturas.component';
import { DetalleFacturaComponent } from './pages/facturas/detalle-factura/detalle-factura.component';
import { NuevaFacturaComponent } from './pages/facturas/nueva-factura/nueva-factura.component';
import { HttpClientModule } from '@angular/common/http';
import { FacturasFormComponent } from './components/facturas/facturas-form/facturas-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientNamePipe } from './pipes/client-name.pipe';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ListaFacturasComponent,
    DetalleFacturaComponent,
    NuevaFacturaComponent,
    FacturasFormComponent,
    // Pipes
    ClientNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
