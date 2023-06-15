import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Image } from '../model/image';
import { Response } from '../model/response';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private _http: HttpClient) {}

  private _page: number = 1;
  private _search: string = '';
  public fotos$: BehaviorSubject<Image[]> = new BehaviorSubject([] as Image[]);

  public getFotos(search: string) {
    this._search = search;
    this._page = 1;
    this.retrieveFotos().subscribe((res) => this.fotos$.next(res.results));
  }

  private retrieveFotos(): Observable<Response<Image>> {
    return this._http.get<Response<Image>>(
      `https://api.unsplash.com/search/photos?client_id=bJrWo14gPhX0IcUP77toHphSSgY4HMBy5p3NUJecuY4&access_key=bJrWo14gPhX0IcUP77toHphSSgY4HMBy5p3NUJecuY4&query=${this._search}&page=${this._page}`
    );
  }

  moreFotos(): void {
    this._page++;
    this.retrieveFotos().subscribe((res) => {
      this.fotos$.next([...this.fotos$.value, ...res.results]);
    });
  }
}
