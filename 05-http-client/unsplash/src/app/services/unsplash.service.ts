import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(private _http: HttpClient) { }

  getFotos(): Observable<any> {
    return this._http.get(`https://api.unsplash.com/search/photos?client_id=bJrWo14gPhX0IcUP77toHphSSgY4HMBy5p3NUJecuY4&access_key=bJrWo14gPhX0IcUP77toHphSSgY4HMBy5p3NUJecuY4&query=cats`)
  }
}
