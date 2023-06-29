export type Factura = {
  id?: number,
  cliente?: Persona;
  nFact: string;
  fecha: string;
  importe: number;
};

export type Persona = {
  nombre: string;
  apellidos?: string[];
};
