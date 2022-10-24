let radioUno = document.getElementById("interesado");
let radioDos = document.getElementById("indeciso");

let cantidades = document.querySelectorAll(".cantidad");
let botonEnviar = document.getElementById("enviar");
let cantidadesAcumuladas = [];

let cantidadesSumar = document.querySelectorAll(".sumar");
let cantidadesAcumuladasSumar = [];


if(radioUno && radioDos && cantidades && botonEnviar && cantidadesSumar){

    radioUno.addEventListener('click', () => {
        document.getElementById("radioRespuesta").innerHTML = "Estas interesado y NO indeciso";
        document.getElementById("radioRespuestaDos").innerHTML = "";
    });

    radioDos.addEventListener('click', () => {
        document.getElementById("radioRespuestaDos").innerHTML = "Estas indeciso y NO interesado";
        document.getElementById("radioRespuesta").innerHTML = "";
    });

    botonEnviar.addEventListener('click', () => {
        cantidades.forEach((cantidad) => {
            cantidadesAcumuladas.push(Number(cantidad.value));
        });
        if(cantidadesAcumuladas[0] > cantidadesAcumuladas[1]){
            alert("El primer valor es mas grande");
            location.reload();
        } else {
            alert("El segundo valor es mas grande");
            location.reload();
        }
    });

    function funcionSumar(){
        cantidadesSumar.forEach((numeroSuma) => {
            cantidadesAcumuladasSumar.push(Number(numeroSuma.value));
        });
        let numeroSumado = cantidadesAcumuladasSumar[0] + cantidadesAcumuladasSumar[1];
        alert("La suma de tus numeros es: " + numeroSumado);
        location.reload();
    }

}

