let modalCarrito = document.getElementById("modalCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let btnSalir = document.getElementById("btnSalir")
let carritoDiv = document.getElementById("containerCarrito")
let salir = document.getElementById("salir")
let precioTotalDiv = document.getElementById("precioTotal")
let precioTotalDolarDiv = document.getElementById("precioTotalDolares")
let btnComprar = document.getElementById("btnComprar")




let carrito = localStorage.getItem("carrito")
let carritoArray = JSON.parse(carrito);

let valorDolar
fetch("https://api.bluelytics.com.ar/v2/latest")
.then((res) => res.json())
.then((info) =>{
    console.log(info.blue.value_avg)
    valorDolar = info.blue.value_avg;
   })


botonCarrito.addEventListener("click", () => {
   modalCarrito.classList.remove('hidden');
   cargarProductosCarrito(carritoArray);
})

salir.addEventListener("click", () => {
   modalCarrito.classList.add('hidden');
})

btnSalir.addEventListener("click", () => {
   modalCarrito.classList.add('hidden');
})

btnComprar.addEventListener("click", () => {
   Swal.fire({
      text:`Muchas gracias por la compra! Nos comunicaremos en la brevedad para coordinar el envio de lo/s producto/s`,
      confirmButtonColor: "blue",
      icon: "success",
   })
})




function cargarProductosCarrito(array){
   carritoDiv.innerHTML = ``
    array.forEach((productoCarrito)=>{ 
      carritoDiv.innerHTML += `

             <li class="flex py-6" id ="productoCarrito${productoCarrito.id}">
             <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
               <img src="../assets/${productoCarrito.imagen}" alt="${productoCarrito.nombre}" class=" w-24 object-cover object-center">
             </div>
      
             <div class="ml-4 flex flex-1 flex-col">
               <div>
                 <div class="flex justify-between text-base font-medium text-gray-900">
                   <h3>
                     <a href="#">${productoCarrito.nombre}</a>
                   </h3>
                   <p class="ml-4">$ ${productoCarrito.precio}</p>
                 </div>
               </div>
               <div class="flex flex-1 items-end justify-between text-sm">
      
                 <div class="flex">
                   <button type="button" id="botonEliminar${productoCarrito.id}" class="font-medium text-indigo-600 hover:text-indigo-500">Borrar</button>
                 </div>
               </div>
             </div>
           </li>
       
    `
    })
    
    array.forEach((productoCarrito) => {
       document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
          console.log(`Eliminar producto`)
          let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
          cardProducto.remove()
          let productoEliminar = array.find((producto) => producto.id == productoCarrito.id)
          console.log(productoEliminar)
          let posicion = array.indexOf(productoEliminar)
          console.log(posicion)
          array.splice(posicion,1)
          console.log(array)
          localStorage.setItem("carrito", JSON.stringify(array))
          calcularTotal(array)
       })
    })
    calcularTotal(array)
    calcularTotalDolares(array)
    
 }
  
  function calcularTotal(array){
     let total = array.reduce((acc, productoCarrito)=> acc + productoCarrito.precio , 0)
     precioTotalDiv.innerHTML = `$ ${total}`;
  
  }
 
  function calcularTotalDolares(array){
    let total = array.reduce((acc, productoCarrito)=> acc + productoCarrito.precio , 0)
    console.log(total)
    total = total / valorDolar
    total = total.toFixed(2);
    precioTotalDolarDiv.innerHTML = `$ ${total}`;
 
 }