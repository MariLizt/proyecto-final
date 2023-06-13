import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TallasService } from '../tallas.service';
import { CarritoService } from '../carrito.service';



@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
 
})
export class DetalleProductoComponent implements OnInit{

  

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
      title: "Cárdigan corto de mezclilla",
      descripcion: "Cierre de botón tipo perla. Mangas de tres cuartos o enrolladas como medias mangas. Dos bolsillos en el pecho. Puños con botones. División lateral. Cuello descendente. Parte inferior alta de cola de golondrina. Satisface las diferentes necesidades: Chaqueta de algodón vaquero o simplemente colgar, ligera, lavada, suave, cómoda y de algodón vaquero.",
      precio: '$140.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto7-negro.jpg',
      colores: ["negro","blanco","azul"]
    },{
      codigo: 8,
      id: '8',
      title: "Blusa Holgada Informal",
      descripcion: "Blusa holgada informal con lazo para mujer, camisa de manga corta con hombros descubiertos, sin tirantes, para verano.",
      precio: '$60.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/pantalones8-negro.jpg',
      colores: ["negro","rosado"]
    },{
      codigo: 9,
      id: '9',
      title: "Camisa de manga corta",
      descripcion: "HHoo88 Camisas de manga corta con cuello en V para mujer, estilo casual, ajustadas, color sólido, fruncidas.",
      precio: '$90.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto9-negro.jpg',
      colores: ["negro","azul","blanco"]
    },{
      codigo: 10,
      id: '10',
      title: "Blusa básica de punto acanalado",
      descripcion: "Camisa básica para mujeres/jóvenes, puede combinar con todo: se puede combinar con jeans, pantalones cortos, faldas en verano o debajo de un abrigo de lana con jeans y botas en otoño/invierno",
      precio: '$80.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto10-negro.jpg',
      colores: ["negro", "rojo"]
    },{
      codigo: 11,
      id: '11',
      title: "SweatyRocks",
      descripcion: "Esta camiseta corta de punto acanalado cuenta con tirantes delgados con cuello en V Combina con una variedad de jeans, faldas y pantalones para un aspecto moderno y bonito para cualquier ocasión. Ajuste perfecto para uso casual, diario, fin de semana, al aire libre, vacaciones, etc.",
      precio: '$60.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto11-negro.jpg',
      colores: ["negro","blanco"]
    },{
      codigo: 12,
      id: '12',
      title: "Camiseta de verano",
      descripcion: "Manga corta, cuello redondo, camisa rasgada, color liso, ombliguera. Tela súper cómoda, permite el paso del aire y es ligera, ideal para hacer ejercicio en el gimnasio, para descansar en casa, como ropa de calle o para salir. Blusas ombligueras para mujeres de todas las edades. Blusa informal y bonita, perfecta para el verano.",
      precio: '$40.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto12-negro.jpg',
      colores: ["negro","rosado","amarillo","celeste"]
    },{
      codigo: 13,
      id: '13',
      title: "vestidos vintage swing",
      descripcion: "Estido de columpio vintage, sin mangas, escote corazón, silueta de línea A, cremallera oculta en la parte trasera, viene con un cinturón como se muestra en las imágenes.",
      precio: '$200.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto12-negro.jpg',
      colores: ["negro","verde","azul","rojo"]
    },{
      codigo: 14,
      id: '14',
      title: "Vestido Bridesmay",
      descripcion: "Diseño elegante: el cuello en V clásico resalta tu encantadora clavícula. Diseño sin mangas que añade una sensación de frescura en el verano caluroso. La cintura alta acentúa tus curvas delgadas. Fácil de mover gracias al exclusivo dobladillo alto y bajo. Este vestido formal de cóctel acampanado debe ser una pieza elegante en tu armario para bodas o fiestas de vacaciones.",
      precio: '$280.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto12-negro.jpg',
      colores: ["negro","rojo","morado","salmon"]
    },{
      codigo: 15,
      id: '15',
      title: "ZAFUL casual de dos piezas",
      descripcion: "Fácil de poner y quitar, se puede llevar las piezas por separado, no solo puedes llevar la parte superior sola, y luego combinar con otros pantalones, como jeans, faldas, pantalones cortos, sino que también puedes llevar falda midi sola, y luego combinar con otras blusas, bikinis, muy versátil.",
      precio: '$90.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto15-negro.jpg',
      colores: ["negro","rosado"]
    },{
      codigo: 16,
      id: '16',
      title: "Vestido midi plisado",
      descripcion: "Con su textura suave y sedosa, corsé, corpiño estilo corpiño y falda drapeada favorecedora, este vestido midi se siente como un clásico instantáneo de salida nocturna. Termina tu atuendo con zapatos de tacón discretos para un aspecto distinguido.",
      precio: '$130.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto16-negro.jpg',
      colores: ["negro","cafe","azul"]
    },{
      codigo: 17,
      id: '17',
      title: "Minivestido de satén",
      descripcion: "Mini vestido corto con material sedoso satinado, diseño ajustado para mostrar tu curva corporal sexy. Tirantes delgados; sin mangas.",
      precio: '$180.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto17-negro.jpg',
      colores: ["negro","cafe","azul","rojo"]
    },{
      codigo: 18,
      id: '18',
      title: "kinstell Vestido largo",
      descripcion: "Vestido largo casual, correas de cinta, cuello cuadrado, sin mangas, cintura alta, cintura elástica, dobladillo con volantes, los sutiles detalles escalonados para la falda estilizan esta pieza perfectamente. Este vestido midi con volantes es perfecto para vestir formal o informal dependiendo de tu día. Combina fácilmente este vestido con tus tacones o sandalias favoritas, un sombrero a juego y embragues.",
      precio: '$90.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto18-negro.jpg',
      colores: ["negro","azul","salmon"]
    },{
      codigo: 19,
      id: '19',
      title: "Pantalones deportivos",
      descripcion: "Cintura alta elástica, pantalones de yoga para entrenamiento, pantalones deportivos con bolsillos. Pantalones deportivos de ajuste holgado. Cómodo de llevar en verano, primavera u otoño. Estos pantalones pueden mostrar muy bien la curva de tus piernas largas.",
      precio: '$40.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/pantalones1-negro.jpg',
      colores: ["negro","beige","rosado","gris"]
    },{
      codigo: 20,
      id: '20',
      title: "Pantalón cargo",
      descripcion: "Elaborado en algodón con costuras en contraste y corte de tiro alto. Un diseño de corte ancho y bota recta con tirantes ajustables y bolsillos laterales con broches.",
      precio: '$160.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/pantalones8-negro.jpg',
      colores: ["negro","verde","rosado","purpura"]
    },{
      codigo: 21,
      id: '21',
      title: "JEAN TIRO ALTO",
      descripcion: "Nueva moda negro jeans de mujer con agujero vaqueros para mujer pantalones vaqueros mujer pantalones de jean de denim rayado pantalones femeninos",
      precio: '$90.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto9-negro.jpg',
      colores: ["negro"]
    },{
      codigo: 22,
      id: '22',
      title: "Pantalones palazzo",
      descripcion: "90 % poliéster, 10 % elastán, cierre de Cordón ajustable, pantalones plisados con un dramático ajuste de pierna ancha con un cordón ajustable en la cintura, estilo de ajuste holgado/pantalones de talle alto que combinan con camisetas cortas",
      precio: '$80.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/pantalones1-negro.jpg',
      colores: ["negro","azul"]
    },{
      codigo: 23,
      id: '23',
      title: "Pantalones capri",
      descripcion: "Pantalones cargo para mujer con cierre de cuerda ajustable alrededor del puño para mantener fuera los insectos durante las actividades al aire libre. Estos versátiles pantalones son adecuados para viajes, senderismo, camping, escalada, pesca, caza, caminar, descansar casual o uso diario.",
      precio: '$60.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/pantalones8-negro.jpg',
      colores: ["negro"]
    },{
      codigo: 24,
      id: '24',
      title: "Pantalones de mezclilla",
      descripcion: "Nuestros jeans de talle súper alto van a 5 bolsillos. Mantén tu estilo fresco e informal ya sea que vayas de vuelta a la escuela o buscando tus nuevos pantalones cortos negros favoritos. Estiliza nuestra mezclilla destruida para los años 90, y2k, festivales y looks diarios.",
      precio: '$80.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto9-negro.jpg',
      colores: ["negro","azul"]
    },{
      codigo: 25,
      id: '25',
      title: "Zapatos de plataforma",
      descripcion: "Zapatos de plataforma con aumento de altura para mujer, zapatillas de deporte para caminar, zapatos de cuña oscilantes, transpirables, ST42",
      precio: '$110.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto10-negro.jpg',
      colores: ["negro", "rosado", "azul"]
    },{
      codigo: 26,
      id: '26',
      title: "botín Forever 21",
      descripcion: "Luce increíble junto a este botín Forever 21, su diseño con elástico lateral, aplicación de estoperoles y cómodo tacón robusto te encantará.",
      precio: '$90.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto11-negro.jpg',
      colores: ["negro","blanco","beige"]
    },{
      codigo: 27,
      id: '27',
      title: "Zapatilla Deportiva Revolution 6 NN",
      descripcion: "Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave. Es la evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso.",
      precio: '$250.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto12-negro.jpg',
      colores: ["negro","rosado"]
    },{
      codigo: 28,
      id: '28',
      title: "Bufanda",
      descripcion: "Bufanda de algodón, chal grueso y cálido de Cachemira a cuadros grises, envolturas largas de negocios, color rojo, A136, Otoño e Invierno",
      precio: '$30.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto10-negro.jpg',
      colores: ["negro", "rojo"]
    },{
      codigo: 29,
      id: '29',
      title: "Bolso cruzado",
      descripcion: "Cierre de cremallera con solapa magnética. Piel sintética y herrajes de color dorado. **Correa de cadena con caída de 23.5 pulgadas y correa para muñeca de 8 pulgadas de largo (**incluye un pequeño bolsillo con cremallera dentro del compartimento principal).",
      precio: '$120.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto11-negro.jpg',
      colores: ["negro","gris"]
    },{
      codigo: 30,
      id: '30',
      title: "Cinturón Dolce y Gabbana",
      descripcion: "Dolce & Gabbana cinturón con placa del logo en tono dorado, agujeros perforados y diseño ajustable. Material: Cuero.",
      precio: '$350.000',
      imagen: 'http://localhost:4200/assets/img/mujer/detalle-de-producto/producto12-negro.jpg',
      colores: ["negro"]
    }];
    
}

function  mensaje(){
  return console.log("producto no disponible")
}

 