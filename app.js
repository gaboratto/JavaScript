let baseDeDatos = []

let carrito = []

const pedirPost = async()=>{
    const respuesta = (await fetch("http://localhost:8080/base.json"))
    baseDeDatos = (await respuesta.json()).baseDeDatos
  

    mostrarBase()
    mostrarCarrito()

}

pedirPost()


const mostrarBase = () => {

    

let section = document.getElementById("seccion-productos")
let temp = document.querySelector("template")
let card = temp.content.querySelector("div")


baseDeDatos.forEach((producto)=>{
    let cardClonada = card.cloneNode(true)
    section.appendChild(cardClonada)

    cardClonada.children[0].children[0].innerText = producto.nombre
    cardClonada.children[0].children[1].innerText = producto.precio
    cardClonada.querySelector("a.boton").dataset.productoid = producto.id
    cardClonada.querySelector("a.botonQuitar").dataset.productoid = producto.id
})

document.querySelectorAll(".boton").forEach(boton => {

    

    boton.addEventListener("click", aniadirProductoAlCarrito)

    
    
  
  })


  document.querySelectorAll(".botonQuitar").forEach(function (botonQuitar) {
    botonQuitar.addEventListener("click", quitarProductoAlCarrito)
})




}

const formulario = document.querySelector("form")
const nombre = document.querySelector("#formName")
const mensaje = document.querySelector("#formMensaje")

formulario.addEventListener("submit" , validarFormulario)

function validarFormulario (e){
    e.preventDefault()
    

    document.querySelector("#saludo").innerHTML=`Gracias por tu consulta, ${nombre.value}`

}




function aniadirProductoAlCarrito(evento){

    

    
    for (let producto of baseDeDatos) {
        if(evento.target.dataset.productoid == producto.id){
            
            carrito.push(producto)
        }
      }
      
      mostrarCarrito()
      guardarCarrito()

      

}





  function quitarProductoAlCarrito(evento){

  
      let index = carrito.findIndex(producto => producto.id == evento.target.dataset.productoid)

        if (index >= 0){
        carrito.splice(index, 1)
        }


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

    



    if(Array.isArray(compraActual) && compraActual.length > 0){
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








