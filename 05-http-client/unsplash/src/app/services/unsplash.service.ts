import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../model/image';
import { Response } from '../model/response';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private _http: HttpClient) {}

  getFotos(search: string): Observable<Response<Image>> {
    console.log('get fotos');
    return this._http.get<Response<Image>>(
      `https://api.unsplash.com/search/photos?client_id=bJrWo14gPhX0IcUP77toHphSSgY4HMBy5p3NUJecuY4&access_key=bJrWo14gPhX0IcUP77toHphSSgY4HMBy5p3NUJecuY4&query=${search}`
    );
  }
}
