/*

let cont=0
let total=0

for (let num= 1; num <= 10; num++){
    
    let valor= Number(prompt(`${num} Ingrese un número: 
    
    (10 numeros maximo, para finalizar poner 0 (cero))`))
        cont=cont+1
        total=total+valor
        if (valor==0){
            break
        }





}


alert(`El promedio es:  ${total/cont}
La suma es:  ${total}
La cantidad de números ingresados fueron:  ${cont}`)


*/




// EJERCICIO DE FUNCIONES


/*

let total=0

for (let precio= 1; precio <= 10; precio++){
    
    let valor= Number(prompt(`${precio} Ingrese los precios de los productos comprados: 
    
    (10 productos maximo, para finalizar poner 0 (cero))`))
        total=total+valor
        if (valor==0){
            break
        }





}


let cuota = Number(prompt("Ingrese la cantidad de cuotas en la que desea realizar la operacion: "))

function valor_cuota(total,cuota){
    return total/cuota
}

let resultado = valor_cuota(total,cuota);




alert(`El total a pagar es:  $${total}
La cantidad de cuotas elegidas es:  ${cuota}
El valor de cada cuota es: $${resultado}`)


*/


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

/*

let resumen = "Listado de productos\n"

for (let producto of baseDeDatos)
	resumen += producto.id + ". "
    	+ producto.nombre + ": "
        + producto.precio + "\n"

alert(resumen)

let ids = prompt("Ingrese los ids de los productos que quiere comprar separados por coma")

ids = ids.split(",")




let total = 0

for (let producto of baseDeDatos) {
  for (let id of ids) {
    if (id == producto.id)  {
      total += producto.precio
    }
  }
}

alert("Total: " + total)

*/

let section = document.getElementById("seccion-productos")
let temp = document.querySelector("template")
let card = temp.content.querySelector("div")


baseDeDatos.forEach((producto)=>{
    let cardClonada = card.cloneNode(true)
    section.appendChild(cardClonada)

    cardClonada.children[0].children[0].innerText = producto.nombre
    cardClonada.children[0].children[1].innerText = producto.precio
})

const formulario = document.querySelector("form")
const nombre = document.querySelector("#formName")
const mensaje = document.querySelector("#formMensaje")

formulario.addEventListener("submit" , validarFormulario)

function validarFormulario (e){
    e.preventDefault()
    

    document.querySelector("#saludo").innerHTML=`Gracias por tu consulta, ${nombre.value}`

}

