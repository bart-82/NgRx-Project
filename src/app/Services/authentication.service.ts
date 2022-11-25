import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationResponse } from '../Models/httpResponses/authentication.response';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  wsLogin: string = environment.baseUrl + 'login';

  authenticate(user: User): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(this.wsLogin, user);
  }
}
