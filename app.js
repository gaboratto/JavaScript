const baseDeDatos = [
    {
        id: 1,
        nombre: "Mate Madera",
        precio: 5200
        
    },
    {
        id: 2,
        nombre: 'Mate Acero',
        precio: 3500
        
    },
    {
        id: 3,
        nombre: "Mate Calabaza",
        precio: 2900

    },
    {
        id: 4,
        nombre: "Bombilla Pico Loro Acero Inoxidable",
        precio: 900

    },
    {
        id: 5,
        nombre: "Bombilla Resorte Acero Inoxidable",
        precio: 500

    },
    {
        id: 6,
        nombre: "Bombilla Chata Acero Inoxidable",
        precio: 700

    },
    {
        id: 7,
        nombre: "Filtro para Bombilla",
        precio: 300

    },
    {
        id: 8,
        nombre: "Termo Acero Inoxidable 1 Lts",
        precio: 15000

    },
    {
        id: 8,
        nombre: "Termo Acero Inoxidable 1,5 Lts",
        precio: 25000

    },
    {
        id: 9,
        nombre: "Termo Acero Inoxidable 1,2 Lts",
        precio: 20000

    }




];

let carrito = []



let section = document.getElementById("seccion-productos")
let temp = document.querySelector("template")
let card = temp.content.querySelector("div")


baseDeDatos.forEach((producto)=>{
    let cardClonada = card.cloneNode(true)
    section.appendChild(cardClonada)

    cardClonada.children[0].children[0].innerText = producto.nombre
    cardClonada.children[0].children[1].innerText = producto.precio
    cardClonada.querySelector("a").dataset.productoid = producto.id
})

const formulario = document.querySelector("form")
const nombre = document.querySelector("#formName")
const mensaje = document.querySelector("#formMensaje")

formulario.addEventListener("submit" , validarFormulario)

function validarFormulario (e){
    e.preventDefault()
    

    document.querySelector("#saludo").innerHTML=`Gracias por tu consulta, ${nombre.value}`

}

document.querySelectorAll(".boton").forEach(boton => {

    boton.addEventListener("click", aniadirProductoAlCarrito)
    
  
  })



function aniadirProductoAlCarrito(evento){

    
    for (let producto of baseDeDatos) {
        if(evento.target.dataset.productoid == producto.id){
            carrito.push(producto)
        }
      }
      
      mostrarCarrito()
      guardarCarrito()

      

}


document.querySelectorAll(".botonQuitar").forEach(botonQuitar => {

    botonQuitar.addEventListener("click", quitarProductoAlCarrito)
    
  
  })



  function quitarProductoAlCarrito(evento){

  
      let index = carrito.findIndex(producto => producto.id == evento.target.dataset.productoid)

        carrito.splice(index, 1)


        mostrarCarrito()
        guardarCarrito()


}


function mostrarCarrito() {
    let elemento = document.getElementById("carrito")
    let total = 0

    elemento.innerHTML = ""

    for (let producto of carrito) {
         elemento.innerHTML += producto.nombre + " "
         elemento.innerHTML += "$" + producto.precio + "<br>"
         
         
            total += producto.precio
          }

          
          elemento.innerHTML += "<br>" + "$" + total

    }



    
function guardarCarrito(){

    const baseDeDatos2 = JSON.stringify(carrito)

    localStorage.setItem("Compra Actual", baseDeDatos2)



}



function traerCarrito(){

    let compraActual = localStorage.getItem("Compra Actual")

    compraActual = JSON.parse(localStorage.getItem("Compra Actual"))

    



    if(Array.isArray(compraActual)){
        carrito=compraActual
        mostrarCarrito()
    }







  

}

traerCarrito()



const boton = document.querySelector(".boton-compra")

boton.addEventListener("click" , () => {

    Swal.fire({
        title: 'Compra exitosa',
        text: 'Gracias por su compra!!',
        icon: 'success',
        confirmButtonText: 'Salir'
      })


})


const boton2 = document.querySelector(".boton-enviar")

boton2.addEventListener("click" , () => {


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estas seguro?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, enviar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Mensaje enviado correctamente!',
            'A la brevedad se le respondera su consulta, gracias!!',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Mensaje cancelado',
            '',
            'error'
          )
        }
      })

    
      })










