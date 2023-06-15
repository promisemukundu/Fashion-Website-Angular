import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItems: Array<CartItem> = [];


  constructor() { }

  public addProductToCart(productId: number, product: Product, quantity: number = 1): void {
    const existingProduct = this.cartItems.find(item => item.productId === productId);

    if (!existingProduct) {
      this.cartItems.push({
        productId,
        product,
        quantity
      });

      return;
    }

    return this.updateCartItems(productId, quantity);
  }

  public getCartItems(): Array<CartItem> {
    return this.cartItems;
  }

  public removeProduct(productId: number) {
    this.cartItems.splice(this.cartItems.findIndex(cartItem => cartItem.productId === productId), 1);
  }

  private updateCartItems(productId: number, quantity: number): void {
    const existingProductIndex = this.cartItems.findIndex(item => item.productId === productId);

    this.cartItems[existingProductIndex].quantity += quantity;
  }
}
