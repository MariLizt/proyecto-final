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
      colores: ["negro", "rojo", "verde","azul"]
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
      title: "Chaqueta de Cuero Sintético",
      descripcion: "Hermosa chaqueta en cuerotex para mujer, ideal para cualquier ocasión, cuenta con dos bolsillos laterales funcionales, material resistente y duradero más grueso que la cuerina, esta forrada en flecce de alto calibre que protege de las bajas temperaturas.",
      precio: '$98.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/chaqueta3-negro.jpg',
      colores: ["negro"]
    },{
      codigo: 4,
      id: '4',
      title: "Chaqueta deportiva",
      descripcion: "Esta capa de la manera Cuenta con choque de color y ropa deportiva, manga completa y delgada. Elegancia y simplicidad es el Se centra en el diseño, es una prenda casual salvaje artículos individuales. Tejido ligero y no elástico. Silueta holgada.",
      precio: '$58.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/chaqueta4-negro.jpg',
      colores: ["negro","azul","rosado"]
    },{
      codigo: 5,
      id: '5',
      title: "Chaqueta de Jenas",
      descripcion: "Chaqueta rasgada, mangas largas, cierre de botón frontal, dos bolsillos en la parte delantera, chaquetas de mezclilla Tredny Fashion.",
      precio: '$58.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/chaqueta4-negro.jpg',
      colores: ["negro","azul","gris"]
    },{
      codigo: 6,
      id: '6',
      title: "Abrigo de forro polar sintético",
      descripcion: "Está hecho de material de alta calidad. Es lo suficientemente resistente para su uso diario. Ideal para pantalones cortos o leggings. Material suave y ligero que le proporciona una sensación cómoda de calor femenino y un aspecto elegante.",
      precio: '$150.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/chaqueta4-negro.jpg',
      colores: ["negro","blanco","cafe"]
    },{
      codigo: 7,
      id: '7',
      title: "Pantalones deportivos",
      descripcion: "cintura alta elástica, pantalones de yoga para entrenamiento, pantalones deportivos con bolsillos. Pantalones deportivos de ajuste holgado. Cómodo de llevar en verano, primavera u otoño. Estos pantalones pueden mostrar muy bien la curva de tus piernas largas.",
      precio: '$40.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/pantalones1-negro.jpg',
      colores: ["negro","beige","rosado","gris"]
    },{
      codigo: 8,
      id: '8',
      title: "Pantalón cargo",
      descripcion: "Elaborado en algodón con costuras en contraste y corte de tiro alto. Un diseño de corte ancho y bota recta con tirantes ajustables y bolsillos laterales con broches.",
      precio: '$160.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/pantalones8-negro.jpg',
      colores: ["negro","verde","rosado","purpura"]
    },{
      codigo: 9,
      id: '9',
      title: "JEAN TIRO ALTO",
      descripcion: "Nueva moda negro jeans de mujer con agujero vaqueros para mujer pantalones vaqueros mujer pantalones de jean de denim rayado pantalones femeninos",
      precio: '$90.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto9-negro.jpg',
      colores: ["negro"]
    },{
      codigo: 10,
      id: '10',
      title: "Zapatos de plataforma",
      descripcion: "Zapatos de plataforma con aumento de altura para mujer, zapatillas de deporte para caminar, zapatos de cuña oscilantes, transpirables, ST42",
      precio: '$110.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto10-negro.jpg',
      colores: ["negro", "rosado", "azul"]
    },{
      codigo: 11,
      id: '11',
      title: "botín Forever 21",
      descripcion: "Luce increíble junto a este botín Forever 21, su diseño con elástico lateral, aplicación de estoperoles y cómodo tacón robusto te encantará.",
      precio: '$90.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto11-negro.jpg',
      colores: ["negro","blanco","beige"]
    },{
      codigo: 12,
      id: '12',
      title: "Zapatilla Deportiva Revolution 6 NN",
      descripcion: "Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave. Es la evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso.",
      precio: '$250.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto12-negro.jpg',
      colores: ["negro","rosado"]
    }];

    
}

function  mensaje(){
  return console.log("producto no disponible")
}

 