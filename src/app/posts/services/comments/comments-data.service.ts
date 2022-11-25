import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { Comment } from '../../models/comment';

@Injectable()
export class CommentsDataService extends DefaultDataService<Comment> {
  //tipo repository di spring boot
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Post', http, httpUrlGenerator);
  }

  //in questo servizio facciamo l'override dei metodi forniti dalla classe estesa

  override getAll(): Observable<Comment[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .pipe(map((res) => res as Comment[])); //chiedere come tipizzare questa risposta
  }
}
