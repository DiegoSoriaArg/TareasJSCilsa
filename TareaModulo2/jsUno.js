
let apellido;
let edad;
let ciudad;
let nombre = prompt("Por favor, ingresa tu nombre");
if (nombre == "") {
    alert("el valor no puede ser nulo, por favor, vuelve a intentarlo");
    location.reload();
} else {
    apellido = prompt("Ahora ingresa tu APELLIDO");
    if (apellido == "") {
        alert("el valor no puede ser nulo, por favor, vuelve a intentarlo");
        location.reload();
    } else {
        edad = prompt("Ahora ingresa tu EDAD...");
        if (edad == "") {
            alert("el valor no puede ser nulo, por favor, vuelve a intentarlo");
            location.reload();
        } else {
            ciudad = prompt("Y por ultimo, ingresa tu ciudad de recidencia");
            if (ciudad == "") {
                alert("el valor no pude ser nulo, por favor, vuelve a intentarlo");
                location.reload();
            }
        }
    }
}

let datosUsuario = [];

datosUsuario[0] = nombre;
datosUsuario[1] = apellido;
datosUsuario[2] = edad;
datosUsuario[3] = ciudad;

document.getElementById('nombre').innerHTML = datosUsuario[0];
document.getElementById('apellido').innerHTML = datosUsuario[1];
document.getElementById('edad').innerHTML = datosUsuario[2];
document.getElementById('ciudad').innerHTML = datosUsuario[3];


