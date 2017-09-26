//Ingresos
var income = prompt("¿Cuanto es tu Ingreso?");//500
// costos
var costs = prompt("¿Cuanto es el costo?");//150
// Porcentaje de Impuestos
var taxPercent = prompt("¿Cuanto es el Porcentaje(%) de Impuestos?");//15
// obteniendo ganancia bruta
var grossProfit = income-costs; // 350
//obteniendo cantidad de Impuestos
var tax = grossProfit * taxPercent/100;//52.5
//ganancia neta
var netIncome = grossProfit - tax;//297.5
console.log("tu ganancia neta $" + netIncome);
//mostrando en la web resultados
document.write("Tu ganancia neta es $ " +  netIncome);
