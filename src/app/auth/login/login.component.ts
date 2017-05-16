import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'app/auth/auth.service';
import { User } from 'app/auth/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  onSubmit() {
    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
     }
    this.authService.login(user)
      .subscribe(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        this.router.navigate(['/']);
      })
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      password: [null, Validators.required]
    });
  }

}
