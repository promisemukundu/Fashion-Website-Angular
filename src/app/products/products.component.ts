import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Product } from '../models/product';
import { ProductsService } from '../service/products.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  private products: Array<Product> = [];
  public productsToDisplay: Array<Product> = [];
  categories: Array<string> = [];

  constructor(
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    forkJoin([
      this.productsService.getProducts(),
      this.productsService.getCategories(),
    ]).subscribe(([products, categories]) => {
      this.products = products;
      this.productsToDisplay = this.products;
      this.categories = categories;
    });
  }

  addToCart(product: Product) {
    this.shoppingCartService.addProductToCart(product.id, product);
  }

  filterByCategory(category: string) {
    this.productsToDisplay = this.products.filter((product) => {
      return product.category === category;
    });
  }
}
