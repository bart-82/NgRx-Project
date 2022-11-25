import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable()
export class PostHttpService {
  constructor(private http: HttpClient) {}

  findAllPosts(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((res) => console.log(res)));
  }
}
