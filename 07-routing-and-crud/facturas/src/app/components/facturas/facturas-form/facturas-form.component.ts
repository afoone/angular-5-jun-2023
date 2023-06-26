import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Factura } from 'src/app/model/factura.model';
import { FacturasService } from 'src/app/service/facturas.service';

@Component({
  selector: 'app-facturas-form',
  templateUrl: './facturas-form.component.html',
  styleUrls: ['./facturas-form.component.css'],
})
export class FacturasFormComponent {
  @Input('factura')
  factura: Partial<Factura> = {} as Partial<Factura>;

  @Output('ok')
  ok: EventEmitter<Factura> = new EventEmitter()

  constructor(private _facturasService: FacturasService) {}

  submit() {
    this._facturasService.update(
      this.factura as Factura,
      (this.factura as Required<Factura>).id
    ).subscribe(
      (f)=> {
        this.ok.emit(f)
      }
    )
  }
}
