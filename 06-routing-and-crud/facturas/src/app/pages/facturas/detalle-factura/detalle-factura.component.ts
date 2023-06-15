import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/model/factura.model';
import { FacturasService } from 'src/app/service/facturas.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css'],
})
export class DetalleFacturaComponent implements OnInit {
  factura: Factura = {} as Factura;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _facturasService: FacturasService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe(({ id }) =>
      this._facturasService
        .findOne(id)
        .subscribe((data) => (this.factura = data))
    );
  }

  back(): void {
    this._router.navigate(['facturas']);
  }
}
