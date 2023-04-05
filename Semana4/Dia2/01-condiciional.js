//EJERCICIO
//EVALUAR EL AMYOR NUMERO DE 3 VALORES

//let tiempo=0, costTotal=0;

const a = 42, b = 2, c = 52;

if (a > b && a > c) {
    console.log("el numero mayo es" + a)
} else if (b > c) {
    console.log("el numero mayo es" + b)
} else {
    console.log("el numero mayo es" + c)
}

console.log("--------------------------------------")

//dado 1 año evaluar si ese año es bisiesto

const year = 740;

if (year % 4 === 0 && (year % 100) != 0) {
    console.log("el año " + year + " si es biciesto")
} else if (year % 400 === 0) {
    console.log("el año " + year + " si es biciesto")
} else {
    console.log("el año " + year + " no es biciesto")
}
