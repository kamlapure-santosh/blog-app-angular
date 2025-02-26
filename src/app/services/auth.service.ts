// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseAuthServiceResponse } from '../models/FirebaseAuthServiceResponse.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  signIn(
    email: string,
    password: string
  ): Observable<{ token: FirebaseAuthServiceResponse }> {
    return this.http.post<{ token: FirebaseAuthServiceResponse }>(
      `${this.apiUrl}/auth/signin`,
      {
        email,
        password,
      }
    );
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getUserId(): number {
    const userId = localStorage.getItem('userId');
    return userId ? parseInt(userId, 10) : 0;
  }
}
