//Preguntar nombre y apellido
var name = prompt("¿cúal es tu nombre y apellido?");
//obteniendo primera inicial
var firstInitial = name.slice(0,1);
//buscando posicion del segundo caracter
var secondInitialPosition = name.indexOf(" ") + 1;
//Obteniendo segunda inicial
var secondInitial = name.slice(secondInitialPosition, secondInitialPosition+1);
// Mostrando iniciales en la web
document.write("Tus iniciales son " + firstInitial.toUpperCase() + secondInitial.toUpperCase());
