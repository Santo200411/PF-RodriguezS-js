let productosDiv = document.getElementById("productos")
let selectOrden = document.getElementById("selectOrden")
let buscador = document.getElementById("buscador")
let buscar = document.getElementById("buscar")
let coincidencia = document.getElementById("coincidencia")
let inicioSesion = document.getElementById("inicioSesion")
let registrarse = document.getElementById("registrarse")

let valorDolar
fetch("https://api.bluelytics.com.ar/v2/latest")
.then((res) => res.json())
.then((info) =>{
    console.log(info.blue.value_avg)
    valorDolar = info.blue.valur_avg
})

mostrarProductos(productos)

let productosEnCarrito
if(localStorage.getItem("carrito")){
   productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
   productosEnCarrito = []
   localStorage.setItem("carrito", productosEnCarrito)
}


function mostrarProductos(array){
    productosDiv.innerHTML = ``;
    for (let producto of array) {
        let nuevoProductoDiv = document.createElement("div");
        nuevoProductoDiv.className = "col-10 col-md-5 col-lg-4 my-2";
        nuevoProductoDiv.innerHTML = `<div id="${producto.id}" class="itemCard overflow-hidden" style="width: 18rem;">
                                      <img class="" style="height: 200px;" src="../assets/${producto.imagen}" alt="${producto.nombre}">
                                      <div class="card-body">
                                         <h4 class="card-title">$ ${producto.precio}</h4>
                                         <p>${producto.nombre}</p>
                                      <button id="agregarBtn${producto.id}" >Agregar al carrito</button>
                                      </div>
                                   </div>`;
        productosDiv.appendChild(nuevoProductoDiv);  
    
        let agregarBtn = document.getElementById(`agregarBtn${producto.id}`);
    
        agregarBtn.addEventListener("click", () => {
          agregarAlCarrito(producto);
        });
      }
    }

 function agregarAlCarrito(producto){
    let productoAgregado = productosEnCarrito.find((elem)=>elem.id == producto.id) 
    if(productoAgregado == undefined){
      productosEnCarrito.push(producto)
       localStorage.setItem("carrito", JSON.stringify(productosEnCarrito)) 
       Swal.fire({
          text:`El producto "${producto.nombre}" ha sido agregado al carrito de compras`,
          confirmButtonColor: "blue",
          imageUrl: '../assets/' + producto.imagen,
          imageHeight: 200
 
       })
    }else{

       Swal.fire({
          title: `El producto ya esta agregado al carrito`,
          icon: "info",
          showConfirmButton: true
 
       })
    }
 }
 

 
 function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    console.log(menorMayor)
    menorMayor.sort((a,b) => a.precio - b.precio)
    mostrarProductos(menorMayor)
  }
  
  function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((elem1 ,elem2) => elem2.precio - elem1.precio)
    mostrarProductos(mayorMenor)
  }
  
  function ordenarAlfabeticamenteTitulo(array){
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort( (a,b) =>{
       if (a.titulo > b.titulo) {
          return 1
        }
        if (a.titulo < b.titulo) {
          return -1
        }
        return 0
    })
  
    mostrarProductos(arrayAlfabetico)
  }
 
 function buscarInfo(buscado, array){

    let busqueda = array.filter(
       (dato) => dato.autor.toLowerCase().includes(buscado.toLowerCase())  || dato.titulo.toLowerCase().includes(buscado.toLowerCase()) 
    )
    busqueda.length == 0 ? 
    (coincidencia.innerHTML = `<h3>El producto ${buscado} no existe</h3>`,
    mostrarProductos(busqueda)) :
    (coincidencia.innerHTML = "", mostrarProductos(busqueda)) 
  }
 

 selectOrden.addEventListener("change", () => {
    console.log(selectOrden.value)
    switch(selectOrden.value){
       case "1":
          ordenarMayorMenor(productos)
       break
       case "2":
          ordenarMenorMayor(productos)
       break
       case "3":
          ordenarAlfabeticamenteTitulo(productos)
       break
       default:
         mostrarProductos(productos)
       break
    }
 }
 )
 buscar.addEventListener("click", () => {
    buscarInfo(buscador.value, productos)
 })
 
 botonCarrito.addEventListener("click", () => {
   console.log("si")   
   cargarProductosCarrito(productosEnCarrito)
 })

 inicioSesion.addEventListener("click", () => {
   enDesarrollo()
})

registrarse.addEventListener("click", () => {
   enDesarrollo()
})

function enDesarrollo(){
   Swal.fire({
      title: `Sección en desarrollo`,
      text:`En las proximas versiones va a poder acceder a este apartado`,
      confirmButtonColor: "blue",
      icon: "error"
   })
}