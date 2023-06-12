import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _http: HttpClient) {

  }

  getPosts(): Promise<Post[] | undefined> {
    return this._http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').toPromise()
  }
}
