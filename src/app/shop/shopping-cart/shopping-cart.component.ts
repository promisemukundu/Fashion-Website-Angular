import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

import { ShoppingCartService } from 'src/app/service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public cartItems: Array<CartItem> = [];
  public total: any
  public totalPrice: number = 0

  constructor(private shoppingCartService: ShoppingCartService) {

  }



  removeProduct(productId: number) {
    console.log('Called removeProduct');

    return this.shoppingCartService.removeProduct(productId)
  }



  ngOnInit(): void {
    this.cartItems = this.shoppingCartService.getCartItems();
    console.log(this.cartItems);
    this.total = this.cartItems.reduce((prev, item) => {
      return (item.product.price * item.quantity) + prev;
    }, 0)


    this.totalPrice = this.total + this.totalPrice
  }
}
