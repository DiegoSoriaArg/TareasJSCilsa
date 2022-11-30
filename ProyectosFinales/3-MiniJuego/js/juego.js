const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: obtenerNumeroAleatorio(WIDTH),
  y: obtenerNumeroAleatorio(HEIGH)
};

let $mapa = document.getElementById("mapa");
let $distancia = document.getElementById("distancia");
let clicks = 0;

$mapa.addEventListener("click", function(e){
    clicks++;
    let distancia = obtenerDistancia(e, target);
    let distanciaRelativa = obtenerDistanciaRelativa(distancia);
    
    $distancia.innerHTML = `<h1>${distanciaRelativa}</h1>`;

    if(distancia < 20){
        alert(`FELICIDADES! Encontraste el tesoro en ${clicks} clicks`);
        alert("Te animas a mejorar esa marca? INTENTALO!");
        location.reload();
    }

});