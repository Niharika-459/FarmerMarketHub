import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, Review } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MockProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Fresh Apples',
      description: 'Crisp and juicy red apples, perfect for snacking or baking.',
      price: 50,
      category: 'Fruits',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS899AVaCTjRhQNNHnWnSdnlv5OMR81HTNDCA&s',
      stock: 100,
      rating: 4.5,
      tags: ['fruit', 'fresh', 'healthy', 'snack'],
      reviews: []
    },
    {
      id: 2,
      name: 'Organic Carrots',
      description: 'Fresh organic carrots, rich in vitamins and perfect for salads.',
      price: 50,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stock: 150,
      rating: 4.2,
      tags: ['vegetable', 'organic', 'healthy', 'salad'],
      reviews: []
    },
    {
      id: 3,
      name: 'Ripe Bananas',
      description: 'Sweet and nutritious bananas, great for energy and potassium.',
      price: 99,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stock: 200,
      rating: 4.0,
      tags: ['fruit', 'fresh', 'healthy', 'energy'],
      reviews: []
    },
    {
      id: 4,
      name: 'Fresh Spinach',
      description: 'Tender and nutritious spinach leaves, perfect for salads and cooking.',
      price: 20,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stock: 80,
      rating: 4.3,
      tags: ['vegetable', 'leafy', 'healthy', 'salad'],
      reviews: []
    },
    {
      id: 5,
      name: 'Potatoes',
      description: 'Nutritious and versatile sweet potatoes, great for roasting or mashing.',
      price: 70,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stock: 120,
      rating: 4.1,
      tags: ['vegetable', 'root', 'healthy', 'versatile'],
      reviews: []
    },
    {
      id: 6,
      name: 'Juicy Oranges',
      description: 'Sweet and tangy oranges, packed with vitamin C.',
      price: 45,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stock: 90,
      rating: 4.4,
      tags: ['fruit', 'citrus', 'healthy', 'vitamin-c'],
      reviews: []
    },
    {
      id: 7,
      name: 'Fresh Tomatoes',
      description: 'Vine-ripened tomatoes, perfect for salads and cooking.',
      price: 190,
      category: 'Vegetables',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-v60vd3FRHbz_X5auGi4vzfthfhUP4Lkgg&s',
      stock: 110,
      rating: 4.2,
      tags: ['vegetable', 'fresh', 'versatile', 'salad'],
      reviews: []
    },
    {
      id: 8,
      name: 'Sweet Mangoes',
      description: 'Juicy and sweet mangoes, perfect for smoothies or eating fresh.',
      price: 200,
      category: 'Fruits',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfetiyZ1VzhwTSq_i-wf-h5pnCEQyPjD4T5Q&s',
      stock: 70,
      rating: 4.6,
      tags: ['fruit', 'tropical', 'sweet', 'fresh'],
      reviews: []
    },
    {
      id: 9,
      name: 'Cauli flower',
      description: 'healthy ',
      price: 30,
      category: 'leafy vegetables',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOoHM2G_g_7aNyEitgx78xLWybjbNO7tENw&s',
      stock: 70,
      rating: 4.6,
      tags: ['fruit', 'tropical', 'sweet', 'fresh'],
      reviews: []
    },
    {
      id: 10,
      name: 'bottle gaurd',
      description: 'improves water content ',
      price: 40,
      category: ' vegetables',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73HIyNn7xEpAxWZx9EpDzsBlmfndmEte3wQ&s',
      stock: 70,
      rating: 4.3,
      tags: ['fruit', 'tropical', 'sweet', 'fresh'],
      reviews: []
    }
  ];

  private mockCategories: string[] = ['Fruits', 'Vegetables', 'Leafy Vegetables'];
  private mockTags: string[] = ['organic', 'local', 'fresh', 'healthy', 'seasonal', 'herb'];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.products.filter(p => p.category === category);
    return of(filteredProducts);
  }

  getProductsByTag(tag: string): Observable<Product[]> {
    return of(this.products.filter(p => p.tags.includes(tag)));
  }

  searchProducts(query: string): Observable<Product[]> {
    const lowerQuery = query.toLowerCase();
    return of(
      this.products.filter(
        p =>
          p.name.toLowerCase().includes(lowerQuery) ||
          p.description.toLowerCase().includes(lowerQuery) ||
          p.category.toLowerCase().includes(lowerQuery) ||
          p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      )
    );
  }

  addReview(productId: number, review: Review): Observable<Product> {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.reviews.push(review);
      product.rating =
        product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length;
    }
    return of(product || this.products[0]);
  }

  getCategories(): Observable<string[]> {
    const categories = [...new Set(this.products.map(product => product.category))];
    return of(categories);
  }

  getTags(): Observable<string[]> {
    return of(this.mockTags);
  }
} 