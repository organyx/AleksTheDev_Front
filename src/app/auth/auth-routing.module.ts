import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'app/auth/login/login.component';
import { RegisterComponent } from 'app/auth/register/register.component';
import { LogoutComponent } from 'app/auth/logout/logout.component';
import { AuthStartComponent } from 'app/auth/auth-start/auth-start.component';

const authRoutes: Routes = [
    { path: '', component: AuthStartComponent, children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
