import { TestBed } from '@angular/core/testing';

import { FacturasService } from './facturas.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Factura } from '../model/factura.model';

describe('FacturasService', () => {
  let service: FacturasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FacturasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#findAll should return an Observable<Factura[]> with facturas', () => {
    const dummyFacturas: Factura[] = [
      {
        id: 1,
        fecha: 'ksldjflksd',
        importe: 123,
        nFact: '123',
      },
      {
        id: 2,
        fecha: 'ksldjflksd',
        importe: 123,
        nFact: '123',
      },
    ];

    service.findAll().subscribe((facturas) => {
      console.log(facturas);
      expect(facturas.length).toBe(2);
      expect(facturas).toEqual(dummyFacturas);
    });

    const req = httpMock.expectOne('http://localhost:4000/facturas');
    req.flush(dummyFacturas);
  });

  fit('#findAll should return an error when error', () => {
    const ERROR_ON_LOAD = 'ERROR ON LOAD';
    service.findAll().subscribe({
      next: () => fail('should fail if not error'), // expect(true).toBe(false)
      error: (error) => {
        console.log({ type: error.type });
        expect(error.statusText).toContain(ERROR_ON_LOAD);
      },
    });
    const req = httpMock.expectOne('http://localhost:4000/facturas');
    req.error(new ProgressEvent('ERROR'), {
      status: 404,
      statusText: ERROR_ON_LOAD,
    });
    // req.flush([]);
  });
});
