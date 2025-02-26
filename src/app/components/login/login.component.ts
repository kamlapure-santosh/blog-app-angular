// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signIn(this.email, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token.idToken);
        localStorage.setItem('userId', response.token.userId.toString());
        this.router.navigate(['/blog-posts']);
      },
      error: (err) => {
        console.error('Login failed', err);
      },
    });
  }
}
