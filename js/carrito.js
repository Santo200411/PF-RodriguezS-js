let carritoDiv = document.getElementById("carritoDiv")



let carrito = localStorage.getItem("carrito")
let carritoArray = JSON.parse(carrito);
console.log(carritoArray);
cargarProductosCarrito(carritoArray);

function cargarProductosCarrito(array){
    carrito.innerHTML = ``
    array.forEach((productoCarrito)=>{
       carrito.innerHTML += `
       
         <div class="w-full h-fit " id ="productoCarrito${productoCarrito.id}">
                    <div class="flex w-full h-fit">
                        h4 class="">${productoCarrito.nombre}</h4>
                        <div class= " text-end">
                            <p class="">$${productoCarrito.precio}</p> 
                        <div>
                        <button class=" " id="botonEliminar${productoCarrito.id}">
                            <img src="../assets/x.png" class=" h-3" alt="Eliminar producto">
                        </button>
                  </div>    
             </div>
       
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
    
 }
  
  function calcularTotal(array){
     let total = array.reduce((acc, productoCarrito)=> acc + productoCarrito.precio , 0)
     total == 0 ? precioTotal.innerHTML= `No hay productos en el carrito` : precioTotal.innerHTML = `El total es <strong>${total}</strong>`
  
  }
 
  function calcularTotalDolares(array){
    let total = array.reduce((acc, productoCarrito)=> acc + productoCarrito.precio , 0)
    total = total / valorDolar
    total == 0 ? precioTotal.innerHTML= `No hay productos en el carrito` : precioTotalDolar.innerHTML = `El valor total en Dolar Blue es <strong>${total}</strong>`
 
 }