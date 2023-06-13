import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

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
    title: "Cárdigan corto de mezclilla",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto7-negro.jpg"
  },{
    codigo: 8,
    title: "Blusa Holgada Informal",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto8-negro.jpg"
  },{
    codigo: 9,
    title: "Camisa de manga corta",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto9-negro.jpg"
  },{
    codigo: 10,
    title: "Blusa básica de punto acanalado",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto10-negro.jpg"
  },{
    codigo: 11,
    title: "SweatyRocks",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto11-negro.jpg"
  },{
    codigo: 12,
    title: "Camiseta de verano",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto12-negro.jpg"
  },{
    codigo: 13,
    title: "Vestido Vintage Swing",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto13-negro.jpg"
  },{
    codigo: 14,
    title: "Vestido Bridesmay",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto14-negro.jpg"
  },{
    codigo: 15,
    title: "ZAFUL casual de dos piezas",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto15-negro.jpg"
  },{
    codigo: 16,
    title: "Vestido midi plisado",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto16-negro.jpg"
  },{
    codigo: 17,
    title: "Minivestido de satén",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto17-negro.jpg"
  },{
    codigo: 18,
    title: "kinstell Vestido largo",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto18-negro.jpg"
  },{
    codigo: 19,
    title: "Pantalón cargo",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto19-negro.jpg"
  },{
    codigo: 20,
    title: "Pantalones deportivos",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto20-negro.jpg"
  },{
    codigo: 21,
    title: "JEAN TIRO ALTO",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto21-negro.jpg"
  },{
    codigo: 22,
    title: "Pantalones palazzo",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto22-negro.jpg"
  },{
    codigo: 23,
    title: "Pantalones capri",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto23-negro.jpg"
  },{
    codigo: 24,
    title: "Pantalones de mezclilla",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto24-negro.jpg"
  },{
    codigo: 25,
    title: "Zapatos de plataforma",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto25.jpg"
  },{
    codigo: 26,
    title: "botín Forever 21",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto26-negro.jpg"
  },{
    codigo: 27,
    title: "Zapatilla Deportiva Revolution 6 NN",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto27.jpg"
  },{
    codigo: 28,
    title: "Bufanda",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto28-negro.jpg"
  },{
    codigo: 29,
    title: "Bolso cruzado",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto29-negro.jpg"
  },{
    codigo: 30,
    title: "Cinturón Dolce y Gabbana",
    imagen: "http://localhost:4200/assets/img/mujer/detalle-de-producto/producto30-negro.jpg"
  }];


  /*Producto1*/
  nombresProductos: string[] = ['chaquetas', '', 'Blusas', '', 'Vestidos', '', 'Pantalones','','zapatos','complementos'];

}

