import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { login } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NgRx_Project';

  constructor(private router: Router, private store: Store<State>) { }

  ngOnInit(): void {
    const userProfile = localStorage.getItem('auth');

    if (userProfile) {
      this.store.dispatch(login({ auth: JSON.parse(userProfile) })); //after the application refresh, the store contains the user profile
    }
  }
}
