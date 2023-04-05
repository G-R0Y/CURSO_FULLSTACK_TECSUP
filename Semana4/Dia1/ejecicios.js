let ahorro=0, sueldo=1;
const semanas=48, porcentaje=0.15;

sueldo =parseInt(prompt("ingrese su sueldo mensual: "));
ahorro = +sueldo * +porcentaje * +semanas


console.log("el costo total es " + ahorro);