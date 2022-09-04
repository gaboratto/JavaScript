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





