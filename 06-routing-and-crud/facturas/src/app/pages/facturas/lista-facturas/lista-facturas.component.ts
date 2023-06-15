import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/model/factura.model';
import { FacturasService } from 'src/app/service/facturas.service';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css'],
})
export class ListaFacturasComponent implements OnInit {
  facturas: Factura[] = [];

  constructor(
    private _router: Router,
    private _facturaService: FacturasService
  ) {}

  ngOnInit(): void {
    this._facturaService.findAll().subscribe((data) => (this.facturas = data));
  }

  goTo(id: number | undefined) {
    id && this._router.navigate(['facturas', id]);
  }
}
