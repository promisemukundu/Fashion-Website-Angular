import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public productId: number = 0;

  product?: Product;

  constructor(private http: HttpClient) { }

  getProduct() {
    this.http.get<Product>(`https://fakestoreapi.com/products/${this.productId}`)
      .subscribe((response) => {
        this.product = response;
      })
  }

  ngOnInit(): void {
    this.getProduct()
  }
}
