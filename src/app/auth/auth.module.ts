import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from 'app/auth/auth-routing.module';
import { AuthStartComponent } from 'app/auth/auth-start/auth-start.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [
    LogoutComponent,
    LoginComponent,
    RegisterComponent,
    AuthStartComponent
  ]
})
export class AuthModule { }
