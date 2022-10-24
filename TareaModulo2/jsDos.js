// Declaramos el arreglo y le asignamos valores a sus posiciones
let posiciones = ["Jesús", "Laura", "Nahuel", "Mónica", "María", "Leandro", "Susana"];

//Imprimimos la lista original
document.write("<br>");
document.write("<br>");
document.write("<b>Lista de alumnos vieja:</b>" + "<br>");
document.write("1: " + posiciones[0] + "<br>");
document.write("2: " + posiciones[1] + "<br>");
document.write("3: " + posiciones[2] + "<br>");
document.write("4: " + posiciones[3] + "<br>");
document.write("5: " + posiciones[4] + "<br>");
document.write("6: " + posiciones[5] + "<br>");
document.write("1: " + posiciones[6] + "<br>");

// Eliminamos a "Leandro" del arreglo
delete(posiciones[5]);

//Cambiamos las pociones de "Monica" y de "Nahuel"
posiciones[2] = "Monica";
posiciones[3] = "Nahuel";

//Agregamos a "Roberto" y a "Claudia" a la lista
posiciones[7] = "Roberto";
posiciones[8] = "Claudia";

//Imprimimos la nueva lista
document.write("<br>");
document.write("<br>");
document.write("<b>Nueva lista de alumnos:</b>" + "<br>");
document.write("1: " + posiciones[0] + "<br>");
document.write("2: " + posiciones[7] + "<br>");
document.write("3: " + posiciones[8] + "<br>");
document.write("4: " + posiciones[1] + "<br>");
document.write("5: " + posiciones[2] + "<br>");
document.write("6: " + posiciones[3] + "<br>");
document.write("7: " + posiciones[4] + "<br>");
document.write("8: " + posiciones[6] + "<br>");