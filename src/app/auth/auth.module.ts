import { AuthEffects } from './auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './reducers/index';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    //RouterModule.forChild([{ path: '', component: LoginComponent }]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
