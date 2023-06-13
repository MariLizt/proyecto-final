import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  listaprodArray(arr: any[], chunkSize: number): any[][] {
    const listadoP = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      listadoP.push(arr.slice(i, i + chunkSize));
    }
    return listadoP;
  }


  cardproductos = [{
    codigo: 1,
    title: "Chaqueta Térmica Con Capucha",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/chaqueta1.jpg"
  },{
    codigo: 2,
    title: "Chaqueta de Invierno",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto2-negro.jpg"
  },{
    codigo: 3,
    title: "Chaqueta de Cuero Sintético",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto3-negro.jpg"
  },{
    codigo: 4,
    title: "Chaqueta deportiva",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto4-negro.jpg"
  },{
    codigo: 5,
    title: "Chaqueta de jeans",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto5-negro.jpg"
  },{
    codigo: 6,
    title: "Chaqueta de jeans",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto6-negro.jpg"
  },{
    codigo: 7,
    title: "Pantalón cargo",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto7-negro.jpg"
  },{
    codigo: 8,
    title: "Pantalones deportivos",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto8-negro.jpg"
  },{
    codigo: 9,
    title: "Pantalones deportivos",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto9-negro.jpg"
  },{
    codigo: 10,
    title: "Zapatos de plataforma",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto10.jpg"
  },{
    codigo: 11,
    title: "botín Forever 21",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto11.jpg"
  },{
    codigo: 12,
    title: "Zapatilla Deportiva Revolution 6 NN",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto12.jpg"
  }];


  /*Producto1*/
  nombresProductos: string[] = ['chaquetas', '', 'pantalones', 'zapatos', 'vestidos', 'complementos'];

}

