import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MockAuthService } from './services/mock-auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      position: relative;
      z-index: 1;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('https://images.unsplash.com/photo-1541024052419-8ea0b8c4c3e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80');
        background-size: cover;
        background-position: center;
        opacity: 0.2;
        z-index: -1;
      }

      .nav-brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        color: #2c3e50;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);

        .brand-logo {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.1);
          }
        }

        a {
          text-decoration: none;
          color: inherit;
          transition: color 0.3s;

          &:hover {
            color: #4CAF50;
          }
        }
      }

      .nav-links {
        display: flex;
        gap: 2rem;

        a {
          text-decoration: none;
          color: #2c3e50;
          font-weight: 500;
          transition: all 0.3s;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);

          &:hover {
            color: #4CAF50;
            background: rgba(255, 255, 255, 0.9);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          &.active {
            color: #4CAF50;
            background: rgba(76, 175, 80, 0.1);
            font-weight: 600;
          }
        }
      }

      .nav-auth {
        display: flex;
        gap: 1rem;

        a {
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 500;
          transition: all 0.3s;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
        }

        a[routerLink="/login"],
        a[routerLink="/register"] {
          color: #2c3e50;
          background: rgba(255, 255, 255, 0.7);

          &:hover {
            background: rgba(255, 255, 255, 0.9);
            color: #4CAF50;
          }
        }

        a:not([routerLink]) {
          color: white;
          background: rgba(231, 76, 60, 0.9);
          cursor: pointer;

          &:hover {
            background: rgba(192, 57, 43, 0.9);
            box-shadow: 0 4px 8px rgba(231, 76, 60, 0.3);
          }
        }
      }
    }

    main {
      min-height: calc(100vh - 60px);
      padding: 2rem;
    }
  `]
})
export class AppComponent {
  isAuthenticated = false;

  constructor(private authService: MockAuthService) {
    this.authService.currentUser$.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
