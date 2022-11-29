import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from 'src/app/reducers';
import { logout } from 'src/app/auth/auth.actions';
import { isLoggedIn, userLogged } from 'src/app/auth/auth.selectors';
import { AuthenticationResponse, AuthUser } from 'src/app/Models/httpResponses/authentication.response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  User$!: Observable<AuthUser | undefined>;


  constructor(private router: Router, private store: Store<State>) { }

  ngOnInit(): void {
    this.User$ = this.store.pipe(select(userLogged))
  }

  Logout() {
    this.store.dispatch(logout());
  }
}
