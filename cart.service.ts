import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  private readonly CART_STORAGE_KEY = 'farmer_market_cart';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadCartItems();
  }

  private loadCartItems(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedCart = localStorage.getItem(this.CART_STORAGE_KEY);
      if (savedCart) {
        try {
          const items = JSON.parse(savedCart);
          this.cartItemsSubject.next(items);
        } catch (error) {
          console.error('Error loading cart items:', error);
          this.cartItemsSubject.next([]);
        }
      }
    }
  }

  private saveCartItems(items: CartItem[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(items));
    }
  }

  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentItems.push({ product, quantity });
    }

    this.cartItemsSubject.next([...currentItems]);
    this.saveCartItems(currentItems);
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentItems = this.cartItemsSubject.value;
    const itemIndex = currentItems.findIndex(item => item.product.id === productId);

    if (itemIndex !== -1) {
      if (quantity > 0) {
        currentItems[itemIndex].quantity = quantity;
      } else {
        currentItems.splice(itemIndex, 1);
      }

      this.cartItemsSubject.next([...currentItems]);
      this.saveCartItems(currentItems);
    }
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItemsSubject.value.filter(
      item => item.product.id !== productId
    );
    this.cartItemsSubject.next(currentItems);
    this.saveCartItems(currentItems);
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
    this.saveCartItems([]);
  }

  getCartTotal(): number {
    return this.cartItemsSubject.value.reduce(
      (total, item) => total + (item.product.price * item.quantity),
      0
    );
  }
}
