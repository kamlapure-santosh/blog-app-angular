import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service'; // src/app/app.component.ts
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, DoCheck {
  isLoggedIn: boolean = false;
  txtLogged: string = 'Login';

  constructor(private authService: AuthService) {}
  ngDoCheck(): void {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.txtLogged = 'Logout';
    } else {
      this.isLoggedIn = false;
      this.txtLogged = 'Login';
    }
  }
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.txtLogged = 'Logout';
    } else {
      this.isLoggedIn = false;
      this.txtLogged = 'Login';
    }
  }
  title = 'blog-app-angular';
  logout(): void {
    this.authService.logout();
  }
}
