// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad = parseInt(prompt("¿Cual es tu edad?"));
if(edad >= 18 && edad < 100){
    document.write("Ya tienes edad para conducir");
}else if(edad >= 100){
    document.write ("La edad ingresada no es correcta");
}else{
    document.write("Aun no tienes edad para conducir");
}