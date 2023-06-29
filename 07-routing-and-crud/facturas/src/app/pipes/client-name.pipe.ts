import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../model/factura.model';

@Pipe({
  name: 'clientname'
})
export class ClientNamePipe implements PipeTransform {

  transform(value: Persona| undefined | null): string {
    if(!value) return "";
    return `${(value.apellidos|| []).map(a=> a.toUpperCase()).join(" ")}, ${value.nombre.charAt(0).toUpperCase() + value.nombre.slice(1).toLowerCase()}`;
  }

}
