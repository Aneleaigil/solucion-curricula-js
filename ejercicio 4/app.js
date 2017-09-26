do{
  var phrase=prompt("Ingrese una frase");
  if (phrase!=""){
    countCharacters(phrase);
    printCharacters(phrase);
    countWhitspaces(phrase);
  }else{
    console.log("Error, debes ingresar una frase");
  }while(phrase=== " ")
  function printCharacters (text)}
    for (var i=0; i< text.length; i++){
      console.log(text[i].toUpperCase());
    }
  }
function countCharacters (text){
  var count=0;
  while(true){
var charFromText=text.charAt(count);
if (charFromText==" ") {
  break;
}
count = count + 1;
}console.log("El numero de caracteres que componen el string ingresado es"+ count)
}
function countWhitspaces(text)
