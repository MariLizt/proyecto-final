import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  cardproductos = [{
    codigo: 1,
    title: "Lorem ipsum dolor sit",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/chaqueta1.jpg"
  },{
    codigo: 2,
    title: "Dolor sit",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/chaqueta2.png"
  }];

  /*Producto1*/
  titlep1 = 'Lorem ipsum dolor sit';
  descripcionp1 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fugiat. A enim tempore, unde voluptatibus quia provident quas voluptatem vel itaque ea. Aperiam, deleniti autem!';
  preciop1 = 120.000
}

