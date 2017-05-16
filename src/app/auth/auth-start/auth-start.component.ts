import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-auth-start',
  templateUrl: './auth-start.component.html',
  styleUrls: ['./auth-start.component.css']
})
export class AuthStartComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
