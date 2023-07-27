class Producto {
    constructor(id, nombre, precio, categoria, imagen, cantidad) {
       this.id = id;
       this.nombre = nombre;
       this.precio = precio;
       this.categoria = categoria;
       this.imagen = imagen;
       this.cantidad = cantidad;
    }

    mostrarInfoProd(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
     }
  }

const producto1 = new Producto(1, "Camiseta de algodón", 200, "Moda", "camiseta.jpg",0);
const producto2 = new Producto(2, "iPhone 13 Pro", 120000, "Electrónica", "iphone.png",0);
const producto3 = new Producto(3, "Bicicleta de montaña", 10000, "Deportes", "bicicleta.jpg",0);
const producto4 = new Producto(4, "Collar de plata", 500, "Accesorios", "collar.jpg",0);
const producto5 = new Producto(5, "Silla de oficina", 5000, "Muebles", "silla.jpg",0);
const producto6 = new Producto(6, "Vestido de fiesta", 1000, "Moda", "vestido.jpg",0);
const producto7 = new Producto(7, "Televisor Samsung 65'' QLED 8K", 200000, "Electrónica", "tele.jpg",0);
const producto8 = new Producto(8, "Pelota de fútbol", 100, "Deportes", "pelota.jpg",0);
const producto9 = new Producto(9, "Reloj de pulsera", 5000, "Accesorios", "reloj.jpg",0);
const producto10 = new Producto(10, "Mesa de comedor", 5000, "Muebles", "mesa.jpg",0);
const producto11 = new Producto(11, "Zapatos de cuero", 2000, "Moda", "zapatos.jpg",0);
const producto12 = new Producto(12, "Portátil Dell XPS 15", 150000, "Electrónica", "laptop.jpg",0);
const producto13 = new Producto(13, "Raqueta de tenis", 500, "Deportes", "raqueta.jpg",0);
const producto14 = new Producto(14, "Bolso de mano", 1000, "Accesorios", "bolso.jpg",0);
const producto15 = new Producto(15, "Sofá de tres plazas", 20000, "Muebles", "sillon.jpg",0);
const producto16 = new Producto(16, "Blusa de seda", 800, "Moda", "blusa.jpg",0);
const producto17 = new Producto(17, "Cámara réflex Nikon D850", 50000, "Electrónica", "camara.jpg",0);
const producto18 = new Producto(18, "Balón de baloncesto", 50, "Deportes", "basquet.jpg",0);
const producto19 = new Producto(19, "Pulsera de cuero", 300, "Accesorios", "pulsera.jpg",0);
const producto20 = new Producto(20, "Escritorio de madera", 10000, "Muebles", "escritorio.jpg",0);
const producto21 = new Producto(21, "Abrigo de invierno", 3000, "Moda", "abrigo.jpg",0);
const producto22 = new Producto(22, "Auriculares inalámbricos", 1000, "Electrónica", "auris.jpg",0);
const producto23 = new Producto(23, "Tabla de surf", 8000, "Deportes", "tabla.jpg",0);
const producto24 = new Producto(24, "Gafas de sol", 500, "Accesorios", "anteojos.jpg",0);
const producto25 = new Producto(25, "Cama queen-size", 15000, "Muebles", "cama.jpg",0);
const producto26 = new Producto(26, "Chaqueta de cuero", 2500, "Moda", "campera.jpg",0);
const producto27 = new Producto(27, "Altavoz Bluetooth", 2000, "Electrónica", "parlante.jpg",0);
const producto28 = new Producto(28, "Bicicleta estática", 3000, "Deportes", "bici.jpg",0);
const producto29 = new Producto(29, "Pendientes de plata", 500, "Accesorios", "aritos.jpg",0);
const producto30 = new Producto(30, "Mesa auxiliar", 1000, "Muebles", "mesaux.jpg",0);

let productos = [] 

if(localStorage.getItem("productos")){
    localStorage.removeItem("productos")
    productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30)
    localStorage.setItem("productos", JSON.stringify(productos))
}else{
    console.log(`Primera vez`)
    productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30)
    localStorage.setItem("productos", JSON.stringify(productos))

}

