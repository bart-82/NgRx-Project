import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostDataSharingService {
  private postId = new BehaviorSubject<string>('');
  cast = this.postId.asObservable();
  constructor() {}

  passData(x: string) {
    this.postId.next(x);
  }
}
