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


let monto = Number(prompt("Ingrese el valor total de la oprecion: "))

let cuota = Number(prompt("Ingrese la cantidad de coutas en la que desea realizar la operacion: "))

function valor_cuota(monto,cuota){
    return monto/cuota
}

let resultado = valor_cuota(monto,cuota);


console.log(resultado)






