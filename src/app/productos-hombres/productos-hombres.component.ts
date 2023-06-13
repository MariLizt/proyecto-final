import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-productos-hombres',
  templateUrl: './productos-hombres.component.html',
  styleUrls: ['./productos-hombres.component.css']
})
export class ProductosHombresComponent {
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
    title: "Slim Casual Gotica",
    imagen: "http://localhost:4200/assets/img/hombre/detalle-de-producto/producto1-negro.jpg"
  },{
    codigo: 2,
    title: "Cuero pu cremallera",
    imagen: "http://localhost:4200/assets/img/hombre/detalle-de-producto/producto2-negro.jpg"
  },{
    codigo: 3,
    title: "Chaqueta Termica",
    imagen: "http://localhost:4200/assets/img/hombre/detalle-de-producto/producto3-negro.jpg"
  },{
    codigo: 4,
    title: "Pantalones de harén",
    imagen: "http://localhost:4200/assets/img/hombre/detalle-de-producto/producto4-negro.jpg"
  },{
    codigo: 5,
    title: "Jogger",
    imagen: "http://localhost:4200/assets/img/hombre/detalle-de-producto/producto5-negro.jpg"
  },{
    codigo: 6,
    title: "JEANS SLIM FIT",
    imagen: "http://localhost:4200/assets/img/hombre/detalle-de-producto/producto6-negro.jpg"
  },{
    codigo: 7,
    title: "Zapatos PIKOLINOS",
    imagen: "http://localhost:4200/assets/img/hombre/detalle-de-producto/producto7-negro.jpg"
  },{
    codigo: 8,
    title: "ZAPATO DEPORTIVO",
    imagen: "http://localhost:4200/assets/img/hombre/detalle-de-producto/producto8-negro.jpg"
  },{
    codigo: 9,
    title: "Vans Zapatillas Skate",
    imagen: "http://localhost:4200/assets/img/hombre/detalle-de-producto/producto9-negro.jpg"
  }];


  /*Producto1*/
  nombresProductos: string[] = ['chaquetas', 'Pantalones', 'Zapatos'];

}
