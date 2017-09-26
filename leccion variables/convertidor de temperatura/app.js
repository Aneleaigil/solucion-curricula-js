//preguntar la temperatura en C°
var temperature = parseInt(prompt("¿Cuál es la temperatura en celsius"));
//convertir celsius a Farenheit
var convertToFarenheit = (temperature*1.8) + 32;
//mostrar resultado en la consola
console.log("La temperatura en Farenheit es " + convertToFarenheit);
//mostrar en la pagina web al usuario
document.write("La temperatura en Farenheit es " + convertToFarenheit);
