//Pasar por parámetro porcentaje de impuesto, si la persona no es de Argentina. 
//Si la persona es de Argentina, es el precio sin impuesto, pero si es de otro 
//lugar, sumar al precio, el impuesto e imprimirlo por consola.

let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let pais = document.getElementById("pais");

if(precio && cantidad && pais){
    function funcionCalcular(){

        let resultado = precio.value * cantidad.value;

        if(pais.value == "Argentina" || pais.value == "argentina"){
            alert("El monto a pagar en el Pais " + pais.value + " es: $" + resultado);
            location.reload();
        } else{
            let respuesta = resultado*(21/100);
            let newPrecio = resultado + respuesta;
            alert("El monto a pagar en el Pais " + pais.value + " es: $" + newPrecio);
            location.reload();
        }
    }
}