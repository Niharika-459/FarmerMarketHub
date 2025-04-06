import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RegisterData } from '../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="register-container">
      <h2>Register</h2>
      <form (ngSubmit)="onSubmit()" class="register-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            [(ngModel)]="registerData.username"
            name="username"
            required
            placeholder="Choose a username"
          >
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            [(ngModel)]="registerData.email"
            name="email"
            required
            placeholder="Enter your email"
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            [(ngModel)]="registerData.password"
            name="password"
            required
            placeholder="Choose a password"
          >
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            [(ngModel)]="confirmPassword"
            name="confirmPassword"
            required
            placeholder="Confirm your password"
          >
        </div>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            [(ngModel)]="registerData.firstName"
            name="firstName"
            required
            placeholder="Enter your first name"
          >
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            [(ngModel)]="registerData.lastName"
            name="lastName"
            required
            placeholder="Enter your last name"
          >
        </div>
        <div class="form-group">
          <label for="address">Address (Optional)</label>
          <input
            type="text"
            id="address"
            [(ngModel)]="registerData.address"
            name="address"
            placeholder="Enter your address"
          >
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number (Optional)</label>
          <input
            type="tel"
            id="phoneNumber"
            [(ngModel)]="registerData.phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
          >
        </div>
        <button type="submit" class="btn primary">Register</button>
        <p class="login-link">
          Already have an account? <a routerLink="/login">Login here</a>
        </p>
      </form>
    </div>
  `,
  styles: [`
    .register-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 2rem;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .register-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      color: #2c3e50;
      font-weight: 500;
    }

    input {
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: #3498db;
      }
    }

    .btn {
      padding: 0.8rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &.primary {
        background-color: #27ae60;
        color: white;

        &:hover {
          background-color: #219a52;
        }
      }
    }

    .login-link {
      text-align: center;
      margin-top: 1rem;
      color: #7f8c8d;

      a {
        color: #3498db;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `]
})
export class RegisterComponent {
  registerData: RegisterData = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: ''
  };
  confirmPassword = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (this.registerData.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    this.authService.register(this.registerData).subscribe({
      next: () => {
        // Navigation will be handled by the auth service
      },
      error: (error) => {
        console.error('Registration failed:', error);
        // Handle registration error (show error message, etc.)
      }
    });
  }
}
