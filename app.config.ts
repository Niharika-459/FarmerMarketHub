import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { MockAuthService } from './services/mock-auth.service';
import { MockProductService } from './services/mock-product.service';
import { CartService } from './services/cart.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    { provide: 'AuthService', useClass: MockAuthService },
    { provide: 'ProductService', useClass: MockProductService },
    CartService
  ]
};
