//////////////  2.19 Realice el diagrama de flujo y pseudocódigo que
//////////////  representen el algoritmo para encontrar el área 
//////////////  de un cuadrado.

let lado=0, area=1;

lado =parseInt(prompt("ingrese el lado del cuadrado: "));
area = lado*lado

console.log("el area del cuadrado es: " + area);


//////////////  2.20 Realice el diagrama de flujo y pseudocódigo que representen el 
//////////////  algoritmo para determinar el promedio que obtendrá un alumno 
//////////////  considerando que realiza tres exámenes, de los cuales el primero y 
//////////////  el segundo tienen una ponderación de 25%, mientras que el tercero
//////////////  de 50%

let exa1=0, exa2=0, exa3=0, prom=0;

exa1 =parseInt(prompt("ingrese la nota del 1er examen :"));
exa2 =parseInt(prompt("ingrese la nota del 2do examen :"));
exa3 =parseInt(prompt("ingrese la nota del 3er examen :"));

prom = exa1*0.25 + exa2*0.25 + exa3*0.5

console.log("su promedio final es: " + prom);


//////////////  2.21 Realice un diagrama de flujo y pseudocódigo que representen 
//////////////  el algoritmo para determinar aproximadamente cuántos meses, 
//////////////  semanas, días y horas ha vivido una persona.

let edad=0, meses=0, semanas=0, dia=0, horas=0, minutos=0, segundos=0;

edad =parseInt(prompt("ingrese su edad :"));

meses=edad*12
semanas=edad*56
dias=edad*365
horas=edad*8760
minutos=edad*525600
segundos=edad*31536000

console.log("ud tiene " + meses + " meses");
console.log("ud tiene " + semanas + " semanas");
console.log("ud tiene " + dias + " dias");
console.log("ud tiene " + horas + " horas");
console.log("ud tiene " + minutos + " minutos");
console.log("ud tiene " + segundos + " segundos");

//////////////  2.22 Se requiere un algoritmo para determinar el costo que tendrá
//////////////  realizar una llamada telefónica con base en el tiempo que
//////////////  dura la llamada y en el costo por minuto. Represente la solución
//////////////  mediante el diagrama de flujo y pseudocódigo.

let tiempo=0, costTotal=0;
const costxmin=1.5

tiempo =parseInt(prompt("ingrese cuantos minutos hablo :"));

costTotal = costxmin*tiempo

console.log("el costo de su llamada es " + costoTotal + " soles");


//////////////  El hotel “Cama Arena” requiere determinar lo que le debe cobrar a
//////////////  un huésped por su estancia en una de sus habitaciones. Realice un
//////////////  diagrama de flujo y pseudocódigo que representen el algoritmo para
//////////////  determinar ese cobro.

let dias=0, costoTotal=0;
const costoxhabitacion=70

dias =parseInt(prompt("ingrese cuantos dias se quedo hospedado :"));

costoTotal = costoxhabitacion*dias

console.log("el costo de su estancia en el hotel 'cama arena' es: " + costoTotal + " soles");