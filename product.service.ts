import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Review } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products/category/${category}`);
  }

  getProductsByTag(tag: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products/tag/${tag}`);
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products/search?q=${query}`);
  }

  addReview(productId: number, review: Review): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/products/${productId}/reviews`, review);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}/products/categories`);
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}/products/tags`);
  }
}
