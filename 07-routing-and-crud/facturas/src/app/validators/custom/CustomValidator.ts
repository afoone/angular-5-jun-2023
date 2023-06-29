import { AbstractControl, ValidatorFn } from "@angular/forms";

export function customValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const {value} = control;
    if (typeof value !== 'number' ||  value % 3 !== 0) {
      return {
        custom: "El valor debe ser un número múltiplo de 3"
      }
    }
    return null;
  };
}
