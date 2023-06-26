import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../model/factura.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacturasService {
  constructor(private _http: HttpClient) {}

  findAll(): Observable<Factura[]> {
    return this._http.get<Factura[]>('http://localhost:4000/facturas');
  }

  findOne(id: number): Observable<Factura> {
    return this._http.get<Factura>(`http://localhost:4000/facturas/${id}`);
  }

  delete(id: number): Observable<number> {
    return this._http
      .delete<void>(`http://localhost:4000/facturas/${id}`)
      .pipe(map(() => id));
  }

  add(factura: Factura): Observable<Factura> {
    return this._http.post<Factura>('http://localhost:4000/facturas', factura);
  }

  update(factura: Factura, id: number): Observable<Factura> {
    return this._http.put<Factura>(
      `http://localhost:4000/facturas/${id}`,
      factura
    );
  }
}
