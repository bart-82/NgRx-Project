import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable()
export class PostsDataService extends DefaultDataService<Post> {
  //tipo repository di spring boot
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Post', http, httpUrlGenerator);
  }

  //in questo servizio facciamo l'override dei metodi forniti dalla classe estesa

  override getAll(): Observable<Post[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((res) => res as Post[])); //chiedere come tipizzare questa risposta
  }
}
