import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Factura } from 'src/app/model/factura.model';
import { FacturasService } from 'src/app/service/facturas.service';
import { customValidator } from 'src/app/validators/custom/CustomValidator';

@Component({
  selector: 'app-facturas-form',
  templateUrl: './facturas-form.component.html',
  styleUrls: ['./facturas-form.component.css'],
})
export class FacturasFormComponent implements OnChanges, OnInit {
  @Input('factura')
  factura: Partial<Factura> = {} as Partial<Factura>;

  fa = new FormArray([
    new FormControl(''),
    new FormControl(''),
  ])

  form = new FormGroup({
    nFact: new FormControl('', [Validators.required, Validators.minLength(4)]),
    fecha: new FormControl(''),
    importe: new FormControl('', [Validators.required, customValidator()]),
    cliente: new FormGroup(
      {
        nombre: new FormControl(''),
        apellidos: this.fa,
      }
    )
  });


  @Output('ok')
  ok: EventEmitter<Factura> = new EventEmitter();

  get apellidos(): FormArray {
    return this.form.get('cliente.apellidos') as FormArray;
  }

  ngOnInit(): void {
    this.fa.push(new FormControl(''));
    this.fa.push(new FormControl(''));
    this.fa.push(new FormControl(''));
  }

  ngOnChanges(): void {
    console.log(this.factura);
    // this.nFactControl.setValue(
    //   this.factura.nFact ? this.factura.nFact + '' : ''
    // );
  }

  constructor(private _facturasService: FacturasService) {}

  buildPayload(): Factura {
    return {
      nFact: this.form.value.nFact,
      fecha: this.form.get('fecha')?.value || '',
      importe: this.form.get('importe')?.value || 0,
    } as Factura;
  }

  submit() {
    console.log(this.form);
  //   const factura = this.buildPayload();
  //   this._facturasService
  //     .update(factura, (this.factura as Required<Factura>).id)
  //     .subscribe((f) => {
  //       this.ok.emit(f);
  //     });
  }
}
