import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TallasService } from '../tallas.service';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-detalle-producto-hombre',
  templateUrl: './detalle-producto-hombre.component.html',
  styleUrls: ['./detalle-producto-hombre.component.css']
})
export class DetalleProductoHombreComponent implements OnInit{

  

    show: boolean = true;
    fondo: string = '';
    activo: string = 'negro';
    idProducto:  string = '';
    tituloProducto: string = '';
    descripcionProducto: string = '';
    precioProducto: string = '';
  
    codigoProducto!: number;
    codigo!: number;
    
    cartItems: any = {};   
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
    constructor(private tallasServicio: TallasService, private route: ActivatedRoute,private carritoService: CarritoService) {
      
    }
  
    agregarAlCarrito(): void {
  
      const cartItems = {
        id: this.idProducto,
        nombre: this.tituloProducto,
        precio: this.precioProducto
      };
  
      this.carritoService.addToCart(cartItems);
      console.log(cartItems)
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
        title: "Slim Casual Gotica",
        descripcion: "Marca	Generico, Modelo	665848 Negra, Tipo	Chaquetas, Género	Hombre, Material	Sintético, Composición	Algodón, Estilo	Casual, Cierre	Cierre, Temporada	Toda temporada",
        precio: '$250.000',
        imagen: 'http://localhost:4200/assets/img/hombre/detalle-de-producto/producto1-negro.jpg',
        colores: ["negro"]
      },{
        codigo: 2,
        id: '2',
        title: "Cuero pu cremallera",
        descripcion: "Marca	Ubmd, Modelo	903, Tipo	Chaquetas, Género	Hombre, Material	Ecocuero, Composición	100% cuero pu Poliester, Tecnología del material	N/a ignífuga, Estilo	Casual, Diseño	Liso, Largo de mangas	Manga larga, Tipo de cuello	Alto",
        precio: '$300.000',
        imagen: 'http://localhost:4200/assets/img/hombre/detalle-de-producto/chaqueta2-negro.jpg',
        colores: ["negro"]
      },{
        codigo: 3,
        id: '3',
        title: "Chaqueta Termica",
        descripcion: "Las instrucciones de cuidado y conservación se encuentran en la etiqueta del producto de acuerdo con lo establecido en la Resolución 1950 de 2009 y demás disposiciones legales, Chaqueta impermeable 80%, Material Ultraliviano, Enguatada en espuma sintética, Forrada en fleece ovejero, Bolsillo interno, Todos sus bolsillos son funcionales, Excelente para invierno, Resiste hasta -8 °c ",
        precio: '$100.000',
        imagen: 'http://localhost:4200/assets/img/hombre/detalle-de-producto/chaqueta3-negro.jpg',
        colores: ["negro"]
      },{
        codigo: 4,
        id: '4',
        title: "Pantalones de harén",
        descripcion: "E2 bolsillos laterales con cremallera y 2 bolsillos grandes por encima del muslo y 2 bolsillos traseros. Se pueden utilizar para almacenar teléfonos, carteras, herramientas y otros artículos. Excelente elasticidad, ajuste relajado con elástico que te ofrece la máxima comodidad. Cintura elástica con cordones ajustables que satisface tus necesidades en diferentes situaciones.",
        precio: '$115.000',
        imagen: 'http://localhost:4200/assets/img/hombre/detalle-de-producto/chaqueta4-negro.jpg',
        colores: ["negro"]
      },{
        codigo: 5,
        id: '5',
        title: "Jogger",
        descripcion: "Slim Fit para utilizar en toda ocasión, casual o deportivo, telas calidad Pat Primo. Dos bolsillos, ubicados en los costados. ",
        precio: '$120.000',
        imagen: 'http://localhost:4200/assets/img/hombre/detalle-de-producto/chaqueta4-negro.jpg',
        colores: ["negro"]
      },{
        codigo: 6,
        id: '6',
        title: "JEANS SLIM FIT",
        descripcion: "Jeans slim fit básicos disponibles en varios tonos, con detalle de rotos en la pernera, diseño de cinco bolsillos, cintura con trabillas, cierre mediante zipper y botón y en tejido ligeramente elástico.",
        precio: '$80.000',
        imagen: 'http://localhost:4200/assets/img/hombre/detalle-de-producto/chaqueta4-negro.jpg',
        colores: ["negro"]
      },{
        codigo: 7,
        id: '7',
        title: "Zapatos PIKOLINOS",
        descripcion: "Están realizados con materiales sostenibles. Un diseño muy elegante que se multiplica gracias a sus cordones y sus plantillas fáciles de quitar. Convierten cada pisada en una sensación de comodidad absoluta.",
        precio: '$340.000',
        imagen: 'http://localhost:4200/assets/img/hombre/detalle-de-producto/producto7-negro.jpg',
        colores: ["negro"]
      },{
        codigo: 8,
        id: '8',
        title: "ZAPATO DEPORTIVO",
        descripcion: "Zapato deportivo. Color negro. Detalles de combinación de materiales en el corte. Cordonera con cuatro pasados. Suela bicolo",
        precio: '$180.000',
        imagen: 'http://localhost:4200/assets/img/hombre/detalle-de-producto/pantalones8-negro.jpg',
        colores: ["negro"]
      },{
        codigo: 9,
        id: '9',
        title: "Vans Zapatillas Skate",
        descripcion: "Estas estilizadas y elegantes zapatillas de caña alta han sido optimizadas para brindarte un desempeño excepcional sobre la tabla, haciendo de tus días de práctica o competición un auténtico paseo.",
        precio: '$180.000',
        imagen: 'http://localhost:4200/assets/img/hombre/detalle-de-producto/producto9-negro.jpg',
        colores: ["negro"]
      }];
      
  }
  
  function  mensaje(){
    return console.log("producto no disponible")
}
