import { Component, OnInit } from '@angular/core';
import { TallasService } from '../tallas.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
 
})
export class DetalleProductoComponent {
  show: boolean = true;
  fondo: string = '';
  activo: string = 'galeria1';
  /*mesg:string;
  cantidad:number;
  constructor() { 
    this.cantidad=1;
    this.mesg;
  }
  ngOnInit() {
  }

  clickevent(){
    this.mesg="producto no disponible";
    return this.mesg;
  }*/
  articulos :any;
  constructor(private tallasServicio: TallasService) {
  }
  
  ngOnInit() {
    this.articulos=this.tallasServicio.retornar();
  }

  /* Articulos*/
  articulo = [{
      codigo: 5000,
      title: "Lorem ipsum dolor sit",
      descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fugiat. A enim tempore, unde voluptatibus quia provident quas voluptatem vel itaque ea. Aperiam, deleniti autem!",
      precio: 120.000
    }];

    /*Producto1*/
    titlep1 = 'Lorem ipsum dolor sit';
    descripcionp1 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fugiat. A enim tempore, unde voluptatibus quia provident quas voluptatem vel itaque ea. Aperiam, deleniti autem!';
    preciop1 = 120.000
}

function  mensaje(){
  return console.log("producto no disponible")
}

 