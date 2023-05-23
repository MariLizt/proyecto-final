import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TallasService } from '../tallas.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
 
})
export class DetalleProductoComponent {
  show: boolean = true;
  fondo: string = '';
  activo: string = 'negro';
  idProducto:  string = '';
  tituloProducto: string = '';
  descripcionProducto: string = '';
  precioProducto: string = '';

  codigoProducto!: number;
  codigo!: number;
  
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
  constructor(private tallasServicio: TallasService, private route: ActivatedRoute,) {
  }
  
  ngOnInit() {
    this.articulos=this.tallasServicio.retornar();
    this.route.params.subscribe((params: Params) => {
      const codigoProducto = +params['codigo'];
      
      const producto = this.articulo.find(producto => producto.codigo === codigoProducto);
      this.codigo = producto ? producto.codigo: 0;
      this.tituloProducto = producto ? producto.title : '';
      this.descripcionProducto = producto ? producto.descripcion : '';
      this.precioProducto = producto ? producto.precio : '';
      this.idProducto = producto ? producto.id : '';
    });
    
  }

  getProductoPorCodigo(codigo: number) {
    return this.articulos.find(codigo);
  }
  
  /* Articulos*/
  articulo = [{
      codigo: 1,
      id: '1',
      title: "Chaqueta Térmica Con Capucha",
      descripcion: "Ropa casual con material suave, gran idea como un pequeño regalo de cumpleaños para mujeres, regalo para la persona que amas, transpirable. No daña la piel,un gran accesorio para mantener el calor en climas fríos y fríos, adecuado para uso casual, playa, fiesta, trabajo, etc. Uso en diferentes ocasiones.",
      precio: '$113.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/chaqueta1.jpg',
      colores: ["negro", "rojo", "verde"]
    },{
      codigo: 2,
      id: '2',
      title: "Chaqueta de Invierno",
      descripcion: "Abrigo con capucha de felpa para mujer, chaquetas gruesas cálidas con estampado Floral, abrigo forrado de piel, chaqueta con cremallera para mujer, Invierno",
      precio: '$100.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/chaqueta2-negro.jpg',
      colores: ["negro", "azul"]
    },{
      codigo: 3,
      id: '3',
      title: "Chaqueta de Invierno",
      descripcion: "Abrigo con capucha de felpa para mujer, chaquetas gruesas cálidas con estampado Floral, abrigo forrado de piel, chaqueta con cremallera para mujer, Invierno",
      precio: '$100.000',
      colores: ["negro", "azul"]
    }];

    /*Producto1*/
    titlep1 = 'Lorem ipsum dolor sit';
    descripcionp1 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fugiat. A enim tempore, unde voluptatibus quia provident quas voluptatem vel itaque ea. Aperiam, deleniti autem!';
    preciop1 = 120.000
}

function  mensaje(){
  return console.log("producto no disponible")
}

 