//-Cree una función JS que acepte 4 argumentos. 
//Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
// Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
//Si es más pequeño, la consola registra "¡El número es menor que 50!"

function sumaMult (uno,dos,tres,cuatro){
  if ((typeof uno !== "number")||(typeof dos!== "number")||(typeof tres!== "number")||(typeof cuatro!== "number")){
    console.log("Alguno de los datos introducidos no es un numero");
  }else{
    total = (uno + dos) * (tres + cuatro);
    mensaje = total > 50 ? "¡El número es mayor que 50!" : "¡El número es inferior a 50!";
    console.log(mensaje);
  }
}

sumaMult(1,'a',5,7);
sumaMult(1,3,5,7);
sumaMult(11,23,5,17);