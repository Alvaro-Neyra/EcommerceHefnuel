// clase Producto
class Product {
  //constructor
  constructor(
    id,
    title,
    price,
    stock,
    photo,
    onsale,
    supplier,
    colors,
    description,
    taxPolicy,
    isFavorite
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.photo = photo;
    this.onsale = onsale;
    //Atributo privado
    this._supplier = supplier;
    //Array de colores
    this.colors = colors;
    //Descripción
    this.description = description;
    //Política de impuestos
    this.taxPolicy = taxPolicy;
    this.isFavorite = isFavorite;
  }

  //metodos getter y setter del atributo privado
  get supplier() {
    return this._supplier;
  }

  set supplier(newSupplier) {
    this._supplier = newSupplier;
  }
}

//instanciamos Los objetos
const product0 = new Product(
  "00A",
  "Pollos chillones",
  9,
  20,
  [
    "./assets/Screenshot_20240520-183314_Photos.jpg",
    "./assets/Screenshot_20240520-183314_Photos.jpg",
    "./assets/Screenshot_20240520-183314_Photos.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Este pollito es para divertir a tu familia con su hilarante sonido, ven y juega!",
  "Soles",
  false
);
const product1 = new Product(
  "001",
  "Set de carros x 12",
  30,
  20,
  [
    "./assets/Screenshot_20240520-182804_Photos.jpg",
    "./assets/Screenshot_20240520-182804_Photos.jpg",
    "./assets/Screenshot_20240520-182804_Photos.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Variedad de colores en ligas",
  "Soles"
);

const product2 = new Product(
  "002",
  "Cofre con ligas",
  30,
  20,
  [
    "./assets/Screenshot_20240520-183012_Photos.jpg",
    "./assets/Screenshot_20240520-183012_Photos.jpg",
    "./assets/Screenshot_20240520-183012_Photos.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Variedad de colores en ligas para hacer pulseras",
  "Soles"
);
const product3 = new Product(
  "003",
  "Muñeco Venom",
  30,
  20,
  [
    "./assets/Screenshot_20240520-183036_Photos.jpg",
    "./assets/Screenshot_20240520-183036_Photos.jpg",
    "./assets/Screenshot_20240520-183036_Photos.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "3 modelos de jebe para jugar",
  "Soles"
);
const product4 = new Product(
  "004",
  "Vayonico",
  22,
  20,
  [
    "./assets/Screenshot_20240520-183100_Photos.jpg",
    "./assets/Screenshot_20240520-183100_Photos.jpg",
    "./assets/Screenshot_20240520-183100_Photos.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Manuales, vienen 2 en la caja",
  "Soles"
);
const product5 = new Product(
  "005",
  "Tren",
  12,
  20,
  [
    "./assets/Screenshot_20240520-183213_Photos.jpg",
    "./assets/Screenshot_20240520-183213_Photos.jpg",
    "./assets/Screenshot_20240520-183213_Photos.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Tren con animales",
  "Soles"
);
const product6 = new Product(
  "006",
  "Oso y calamar",
  5.5,
  20,
  [
    "./assets/Screenshot_20240520-183658_Photos.jpg",
    "./assets/Screenshot_20240520-183658_Photos.jpg",
    "./assets/Screenshot_20240520-183658_Photos.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Antidesestresantes con luces",
  "Soles"
);

const product7 = new Product(
  "007",
  "Mosaico",
  45,
  20,
  [
    "./assets/Screenshot_20240226-154331_WhatsApp.jpg",
    "./assets/Screenshot_20240226-154331_WhatsApp.jpg",
    "./assets/Screenshot_20240226-154331_WhatsApp.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Mosaico, juego didáctico",
  "Soles",
  false
);
const product8 = new Product(
  "008",
  "Pistola policia x4",
  18,
  20,
  [
    "./assets/Screenshot_20240226-153942_WhatsApp.jpg",
    "./assets/Screenshot_20240226-153942_WhatsApp.jpg",
    "./assets/Screenshot_20240226-153942_WhatsApp.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Pistolas policía con dardos",
  "Soles"
);
const product9 = new Product(
  "009",
  "Bingo",
  20,
  20,
  [
    "./assets/Screenshot_20240226-153756_WhatsApp.jpg",
    "./assets/Screenshot_20240226-153756_WhatsApp.jpg",
    "./assets/Screenshot_20240226-153756_WhatsApp.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Bingo Lotto",
  "Soles"
);
const product10 = new Product(
  "010",
  "Plastilina x8",
  24,
  20,
  [
    "./assets/Screenshot_20240226-153531_WhatsApp.jpg",
    "./assets/Screenshot_20240226-153531_WhatsApp.jpg",
    "./assets/Screenshot_20240226-153531_WhatsApp.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "PLASTILINA, 8 unidades vienen en la caja",
  "Soles"
);
const product11 = new Product(
  "011",
  "Pony musical",
  40,
  20,
  [
    "./assets/Screenshot_20240226-152940_WhatsApp (1).jpg",
    "./assets/Screenshot_20240226-152940_WhatsApp (1).jpg",
    "./assets/Screenshot_20240226-152940_WhatsApp (1).jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Piano en forma de PONNY musical, con sonido y luces",
  "Soles"
);
const product12 = new Product(
  "012",
  "Pesca imantada",
  7,
  20,
  [
    "./assets/Screenshot_20240226-152828_WhatsApp.jpg",
    "./assets/Screenshot_20240226-152828_WhatsApp.jpg",
    "./assets/Screenshot_20240226-152828_WhatsApp.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Piano en forma de PONNY musical, con sonido y luces",
  "Soles"
);
const product13 = new Product(
  "013",
  "Set Uñas",
  "20",
  20,
  [
    "./assets/1720708084675.jpg",
    "./assets/1720708084675.jpg",
    "./assets/1720708084675.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Uñas postizas para niñas, diferentes modelos",
  "Soles"
);
const product14 = new Product(
  "014",
  "Set Dragon Ball",
  "60",
  20,
  [
    "./assets/1720708096214.jpg",
    "./assets/1720708096214.jpg",
    "./assets/1720708096214.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "De jebe y con las esferas",
  "Soles"
);
const product15 = new Product(
  "015",
  "Ken En Bolsa",
  "15",
  20,
  [
    "./assets/1720708126666.jpg",
    "./assets/1720708126666.jpg",
    "./assets/1720708126666.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Articulable",
  "Soles"
);
const product16 = new Product(
  "016",
  "Burbuja Delfin",
  "6",
  20,
  [
    "./assets/1720708138585.jpg",
    "./assets/1720708138585.jpg",
    "./assets/1720708138585.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Burbujas tipo pistola",
  "Soles"
);
const product17 = new Product(
  "017",
  "Ken En Caja",
  "20",
  20,
  [
    "./assets/1720708144165.jpg",
    "./assets/1720708144165.jpg",
    "./assets/1720708144165.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Ken con accesorios articulable",
  "Soles"
);
const product18 = new Product(
  "018",
  "Piano Musical",
  "22",
  20,
  [
    "./assets/1720708160168.jpg",
    "./assets/1720708160168.jpg",
    "./assets/1720708160168.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Con sonido de animales y musical",
  "Soles"
);
const product19 = new Product(
  "019",
  "Cometas",
  "9",
  20,
  [
    "./assets/1720708171120.jpg",
    "./assets/1720708171120.jpg",
    "./assets/1720708171120.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Diferentes modelos",
  "Soles"
);
const product20 = new Product(
  "020",
  "Tambor Payaso",
  "20",
  20,
  [
    "./assets/1720708194275.jpg",
    "./assets/1720708194275.jpg",
    "./assets/1720708194275.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Musical manual para bebes",
  "Soles"
);
const product21 = new Product(
  "021",
  "Twister",
  "20",
  20,
  [
    "./assets/1720708231569.jpg",
    "./assets/1720708231569.jpg",
    "./assets/1720708231569.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "2 nuevos movimientos",
  "Soles"
);
const product22 = new Product(
  "022",
  "Sonajas Con Mordedor",
  "15",
  20,
  [
    "./assets/1720708243645.jpg",
    "./assets/1720708243645.jpg",
    "./assets/1720708243645.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Sonajas con mordedor",
  "Soles"
);
const product23 = new Product(
  "023",
  "Ajedrez 3 En 1",
  "30",
  20,
  [
    "./assets/1720708252249.jpg",
    "./assets/1720708252249.jpg",
    "./assets/1720708252249.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Ajedrez dama ludo",
  "Soles"
);
const product24 = new Product(
  "024",
  "Teléfono",
  "20",
  20,
  [
    "./assets/1720708255713.jpg",
    "./assets/1720708255713.jpg",
    "./assets/1720708255713.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Telefono carrito para bebes",
  "Soles"
);
const product25 = new Product(
  "025",
  "Sonajas Con Mordedor",
  "18",
  20,
  [
    "./assets/1720708259275.jpg",
    "./assets/1720708259275.jpg",
    "./assets/1720708259275.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Sonajas para bebes",
  "Soles"
);
const product26 = new Product(
  "026",
  "Ajedrez 4 En 1",
  "20",
  20,
  [
    "./assets/1720708274912.jpg",
    "./assets/1720708274912.jpg",
    "./assets/1720708274912.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Ajedrez, dama, Casino, ludo",
  "Soles"
);
const product27 = new Product(
  "027",
  "Set Basquet",
  "50",
  20,
  [
    "./assets/1720708287424.jpg",
    "./assets/1720708287424.jpg",
    "./assets/1720708287424.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Set de basquet para niños",
  "Soles"
);
const product28 = new Product(
  "028",
  "Pistola Hidrogel",
  "22",
  20,
  [
    "./assets/1720708296448.jpg",
    "./assets/1720708296448.jpg",
    "./assets/1720708296448.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Pistola hidrogel para jugar",
  "Soles"
);
const product29 = new Product(
  "029",
  "Set Cocina",
  "32",
  20,
  [
    "./assets/1720708330553.jpg",
    "./assets/1720708330553.jpg",
    "./assets/1720708330553.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Set cocina de metal",
  "Soles"
);
const product30 = new Product(
  "030",
  "Carro Con Pista",
  "20",
  20,
  [
    "./assets/1720708353110.jpg",
    "./assets/1720708353110.jpg",
    "./assets/1720708353110.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Pista de 56 pcs",
  "Soles"
);
const product31 = new Product(
  "031",
  "Maquillaje",
  "24",
  20,
  [
    "./assets/1720708373503.jpg",
    "./assets/1720708373503.jpg",
    "./assets/1720708373503.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Maquillaje real",
  "Soles"
);
const product32 = new Product(
  "032",
  "Carro Control",
  "40",
  20,
  [
    "./assets/1720708379446.jpg",
    "./assets/1720708379446.jpg",
    "./assets/1720708379446.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Carro a control remoto, varios colores",
  "Soles"
);
const product33 = new Product(
  "033",
  "Maquillaje Sirena",
  "12",
  20,
  [
    "./assets/1720708407145.jpg",
    "./assets/1720708407145.jpg",
    "./assets/1720708407145.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Maquillaje real",
  "Soles"
);
const product34 = new Product(
  "034",
  "Barbie",
  "10",
  20,
  [
    "./assets/1720708467545.jpg",
    "./assets/1720708467545.jpg",
    "./assets/1720708467545.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Barbie",
  "Soles"
);
const product35 = new Product(
  "035",
  "Muñeca Musical",
  "49",
  20,
  [
    "./assets/1720708481571.jpg",
    "./assets/1720708481571.jpg",
    "./assets/1720708481571.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Musical",
  "Soles"
);
const product36 = new Product(
  "036",
  "Set Mario Bross",
  "112",
  20,
  [
    "./assets/1720708504845.jpg",
    "./assets/1720708504845.jpg",
    "./assets/1720708504845.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "De colección",
  "Soles"
);
const product37 = new Product(
  "037",
  "Set De Hogar",
  "80",
  20,
  [
    "./assets/1720708517958.jpg",
    "./assets/1720708517958.jpg",
    "./assets/1720708517958.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "A pilas, con luces",
  "Soles"
);
const product38 = new Product(
  "038",
  "Guitarra Jirafa",
  "42",
  20,
  [
    "./assets/1720708546907.jpg",
    "./assets/1720708546907.jpg",
    "./assets/1720708546907.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Guitarra musical con luces y sonido",
  "Soles"
);
const product39 = new Product(
  "039",
  "Tren Didáctico",
  "20",
  20,
  [
    "./assets/1720708549990.jpg",
    "./assets/1720708549990.jpg",
    "./assets/1720708549990.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Tren didáctico con números y letras",
  "Soles"
);
const product40 = new Product(
  "040",
  "Mario Bross",
  "70",
  20,
  [
    "./assets/1720708568580.jpg",
    "./assets/1720708568580.jpg",
    "./assets/1720708568580.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Mario de colección, plástico duro",
  "Soles"
);
const product41 = new Product(
  "041",
  "Transformer",
  "168",
  20,
  [
    "./assets/1720708585867.jpg",
    "./assets/1720708585867.jpg",
    "./assets/1720708585867.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Robot, lanza discos, camina, con sonido",
  "Soles"
);
const product42 = new Product(
  "042",
  "Guitarras",
  "33",
  20,
  [
    "./assets/1720708590188.jpg",
    "./assets/1720708590188.jpg",
    "./assets/1720708590188.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Musical, con luces y colgador",
  "Soles"
);
const product43 = new Product(
  "043",
  "Piano Caballo",
  "40",
  20,
  [
    "./assets/1720708616676.jpg",
    "./assets/1720708616676.jpg",
    "./assets/1720708616676.jpg",
  ],
  "50% Off",
  "Importado",
  ["Unico"],
  "Piano musical, con luces",
  "Soles"
);

//Creamos el array de los productos
let products = [
  product0,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
  product25,
  product26,
  product27,
  product28,
  product29,
  product30,
  product31,
  product32,
  product33,
  product34,
  product35,
  product36,
  product37,
  product38,
  product39,
  product40,
  product41,
  product42,
  product43,
];
