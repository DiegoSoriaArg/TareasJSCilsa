let obtenerNumeroAleatorio = size => {
    return Math.floor(Math.random() * size);
}

let obtenerDistancia = (e, target) => {
    let difX = e.offsetX - target.x;
    let difY = e.offsetY - target.y;
    return Math.sqrt((difX * difX)+(difY + difY));
}

let obtenerDistanciaRelativa = distancia => {
    if(distancia < 30){
        return "Realmente caliente!!";
    } else if(distancia < 40){
        return "Muy caliente!";
    } else if(distancia < 60){
        return "Caliente!"
    } else if(distancia < 100){
        return "Calido..";
    } else if(distancia < 180){
        return "Frio..";
    } else if(distancia < 350){
        return "Helado mal !.."
    } else {
        return "Congelado!!";
    }
}