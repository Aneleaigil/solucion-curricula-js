var age = parseInt(prompt("¿Cual es tu Edad?"));//31
//convirtiendo edad a segundos
var ageInSeconds = age*365*24*60*60;
console.log(ageInSeconds);
//mostrando edad en la web
document.write("Tu edad es " + age + " y en segundos seria "  + ageInSeconds);
