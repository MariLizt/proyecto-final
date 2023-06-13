import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cartitems: any[] = [];

  constructor() {
    // Cargar los elementos del carrito desde el localStorage al inicializar el servicio
    this.loadCartItems();
  }

  addToCart(item: any): void {
    this.cartitems.push(item);
    this.saveCartItems();
  }

  getCartItems(): any[] {
    return this.cartitems;
  }

  private saveCartItems(): void {
    localStorage.setItem('cartitems', JSON.stringify(this.cartitems));
  }

  private loadCartItems(): void {
    const cartitems = localStorage.getItem('cartitems');
    if (cartitems) {
      this.cartitems = JSON.parse(cartitems);
    }
  }
}
