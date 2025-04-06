import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User, LoginCredentials, RegisterData } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    this.loadUser();
  }

  private loadUser(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          this.currentUserSubject.next(user);
        } catch (error) {
          console.error('Error loading user:', error);
          this.logout();
        }
      }
    }
  }

  private saveUser(user: User | null): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
          localStorage.removeItem('currentUser');
        }
      } catch (error) {
        console.error('Error saving user:', error);
      }
    }
  }

  login(credentials: LoginCredentials): Observable<User> {
    // Mock successful login
    const mockUser: User = {
      id: 1,
      username: credentials.email,
      email: credentials.email,
      password: credentials.password,
      firstName: 'John',
      lastName: 'Doe',
      role: 'user'
    };

    this.currentUserSubject.next(mockUser);
    this.saveUser(mockUser);
    return of(mockUser);
  }

  register(data: RegisterData): Observable<User> {
    // Mock successful registration
    const mockUser: User = {
      id: 1,
      username: data.email,
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      role: 'user'
    };

    this.currentUserSubject.next(mockUser);
    this.saveUser(mockUser);
    return of(mockUser);
  }

  logout(): void {
    this.currentUserSubject.next(null);
    this.saveUser(null);
    this.router.navigate(['/logout']);
  }

  isAuthenticated(): Observable<boolean> {
    return of(!!this.currentUserSubject.value);
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }
} 