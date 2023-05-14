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

}

function  mensaje(){
  return console.log("producto no disponible")
}

 