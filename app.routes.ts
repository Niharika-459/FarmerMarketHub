import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { AddressDetailsComponent } from './components/checkout/address-details/address-details.component';
import { LogoutMessageComponent } from './components/logout-message/logout-message.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'checkout/address', component: AddressDetailsComponent, canActivate: [authGuard] },
  { path: 'logout', component: LogoutMessageComponent },
  { path: '**', redirectTo: '/home' }
];
