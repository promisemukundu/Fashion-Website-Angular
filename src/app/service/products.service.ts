import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Array<Product>>('https://fakestoreapi.com/products')
  }

  getCategories() {
    return this.http.get<Array<string>>('https://fakestoreapi.com/products/categories')
  }
}
