import { Component } from '@angular/core';
import { CarritoService  } from '../carrito.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartitems: any[] = [];

  constructor(private carritoService: CarritoService) {
  }

  ngOnInit() {
    this.cartitems = this.carritoService.getCartItems();
  }

  stringifyCartItems(): string {
    let result = '';
    for (const item of this.cartitems) {
      result += `ID: ${item.id} - NOMBRE: ${item.nombre} - PRECIO: ${item.precio}\n`;
    }
    return result;
  }

  mostrarMensaje() {
    alert('¡Gracias, su pedido está en camino!');
  }
  
}
