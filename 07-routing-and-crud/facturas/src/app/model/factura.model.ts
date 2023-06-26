export type Factura = {
  id?: number,
  cliente: Persona;
  nFact: number;
  fecha: string;
  importe: number;
};

export type Persona = {
  nombre: string;
  apellidos: string[];
};
