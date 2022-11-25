import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from 'src/app/reducers';
import { logout } from 'src/app/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  User$!: Observable<any>;

  constructor(private router: Router, private store: Store<State>) {}

  ngOnInit(): void {
    this.User$ = this.store;
  }

  Logout() {
    this.store.dispatch(logout());
  }
}
