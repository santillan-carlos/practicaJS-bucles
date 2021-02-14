/*
Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
*/
let nota = parseInt(prompt("Ingrese su nota"));
if(nota <= 2){
    document.write("Muy deficiente");
}else if (nota >= 3 && nota <= 4){
    document.write("Insuficiente");
}else if (nota >= 5 && nota <= 6){
    document.write("Suficiente");
}else if (nota === 7){
    document.write("Bien");
}else if (nota >= 8 && nota <= 9){
    document.write("Notable");
}else if (nota = 10){
    document.write("Sobresaliente");
}