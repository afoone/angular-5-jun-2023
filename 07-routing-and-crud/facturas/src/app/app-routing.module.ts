import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ListaFacturasComponent } from './pages/facturas/lista-facturas/lista-facturas.component';
import { DetalleFacturaComponent } from './pages/facturas/detalle-factura/detalle-factura.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'facturas',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "facturas",
    component: ListaFacturasComponent
  },
  {
    path: "facturas/:id",
    component: DetalleFacturaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
