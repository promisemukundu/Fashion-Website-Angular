import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, forkJoin } from 'rxjs';
import { Product } from '../models/product';
import { ProductsService } from '../service/products.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  private products: Array<Product> = [];
  public productsToDisplay: Array<Product> = [];
  categories: Array<string> = [];
  price: number = 0;
  searchText: string = ''
  public searchControl = new FormControl<string>('');

  constructor(private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    forkJoin([
      this.productsService.getProducts(),
      this.productsService.getCategories(),
    ]).subscribe(([products, categories]) => {
      this.products = products as Array<any>;
      this.productsToDisplay = this.products;
      this.categories = categories;
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(res => (res as string).length >= 3)
    ).subscribe(searchTerm => {
      console.log(searchTerm);
      this.productsToDisplay = this.products.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm!.toLowerCase());
      });
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

  filterByPrice(minPrice: number, maxPrice: number) {
    this.productsToDisplay = this.products.filter((product) => {
      return product.price > minPrice && product.price <= maxPrice;
    });
  }

  public filterBySearch(): void {
    this.productsToDisplay = this.products.filter((product) => {
      return product.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
}



