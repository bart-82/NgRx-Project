import { Router } from '@angular/router';
import { AuthenticationService } from './../../Services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { noop, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { login } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private store: Store<State>,
    private router: Router
  ) { }

  ngOnInit(): void { }

  loginForm = new FormGroup({
    email: new FormControl('imafa82@gmail.com', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password: new FormControl('test', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  login() {
    console.log(this.loginForm.value);
    this.authenticationService
      .authenticate(this.loginForm.value)
      .pipe(
        tap((user) => {
          console.log(user);
          this.store.dispatch(login({ auth: user }));
          this.router.navigateByUrl('/posts');
        })
      )
      .subscribe(noop);
  }
}
