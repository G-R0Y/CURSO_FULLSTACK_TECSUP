// const numper = 350
// let costTotal = 1, cosplato = 95;

// if (numper > 200 && numper <= 300) {
//     cosplato = 85
// } else if (numper > 300) {
//     cosplato = 75
// }

// costTotal = numper * cosplato
// console.log("el conto total es " + costTotal)


// console.log("----------------------")


// const nroalumnos = 49
// let costTotal = 1, costalumno = 95;

// if (nroalumnos >= 100) {
//     costalumno = 65
//     costTotal = costalumno * nroalumnos
// } else if (nroalumnos >= 50) {
//     costalumno = 70
//     costTotal = costalumno * nroalumnos
// } else if (nroalumnos >= 30) {
//     costalumno = 95
//     costTotal = costalumno * nroalumnos
// } else if (nroalumnos < 30) {
//     costTotal = 4000
// }

// console.log("el conto total es " + costTotal)


// console.log("----------------------")

/////////////////////////////
///// EJERCICIO 3.4 /////////
/////////////////////////////

let horas = 6, costTotal = 0;

if (horas <= 2) {
    costTotal = horas * 5
} else if (horas <= 5) {
    costTotal = 14 * (horas - 2)
} else if (horas <= 10) {
    costTotal = 25 * (horas - 5)
} else if (horas > 10) {
    costTotal = 37 + d * (horas - 10)
}

console.log("el conto total es " + costTotal)

console.log("----------------------")

/////////////////////////////
///// EJERCICIO 3.18 /////////
/////////////////////////////

const antiguedad = 5, sueldo = 2100;
let bono = 1

if (antiguedad > 4 || sueldo < 2000) {
    bono = sueldo * 0.25
} else {
    bono = sueldo * 0.20
}

console.log("su bono es " + bono)


/////////////////////////////
///// EJERCICIO 3.19 /////////
/////////////////////////////

const edad = 17, sexo = "M";

if (edad >= 70) {
    console.log("su vacuba es la tipo C");
} else {
    if (edad >= 16 && edad < 70) {
        if (sexo === "M") {
            console.log("su vacuba es la tipo B")
        } else {
            console.log("su vacuba es la tipo A")
        }
    } else {
        console.log("su vacuba es la tipo A")
    }
}


/////////////////////////////
///// EJERCICIO 3.20 /////////
/////////////////////////////

const modelos = "B", preciotela = 30, talla = 32, cantidad = 1;
let preciofab = 1, precioventa = 1, ganancia = 1;

if (talla === 32 || talla === 36) {
    if (modelos === "A") {
        preciofab = preciotela * 1.80
    } else if (modelos === "B") {
        preciofab = preciotela * 1.90
    } else {
        console.log("no existe ese modelo")
    }
    preciofab = preciofab * 1.04
    precioventa = preciofab * 1.3
    console.log("el precio de venta para el modelo " + modelos + " y talla " + talla + " es " + precioventa)
    console.log("si confeciona " + cantidad + " pantalones  del modelo " + modelos + " y talla " + talla + " sera de " + precioventa)
} else if (talla === 30) {
    if (modelos === "A") {
        preciofab = preciotela * 1.80
    } else if (modelos === "B") {
        preciofab = preciotela * 1.90
    } else {
        console.log("no existe ese modelo")
    }
    precioventa = preciofab * 1.3
    console.log("el precio de venta para el modelo " + modelos + " y talla " + talla + " es " + precioventa)
    console.log("si confeciona " + cantidad + " pantalones  del modelo " + modelos + " y talla " + talla + " sera de " + precioventa)

} else {
    if (modelos != "A" && modelos != "B") {
        console.log("no existe esa talla");
    } else {
        console.log("no existe esa talla ni modelo")
    }
}