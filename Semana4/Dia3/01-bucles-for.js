// const b = 3;
// let n = 1;

// for (let a = 0; a < 13; a += 1) {
//     n = a * b
//     console.log(b + " x " + a + " = " + n)
// }

/////////////
/////////////
/////////////

// let b = 7, c = 5, n=0;

// for (let a = 1; a <= b; a += 1) {
//     n = c + n
// }
// console.log("la multiplicacion es " + n)

/////////////
/////////////
/////////////

let b = 0, positivos = 0, negativos = 0, ceros=0;

for (let a = 1; a <= 5; a++) {
    // b = prompt("ingrese el valor " + a)

    if (b > 0) {
        positivos = positivos + 1
    } else if (b < 0) {
        negativos = negativos + 1
    } else {
        ceros = ceros + 1
    }
}

console.log("tiene " + positivos +"numeros positivos")
console.log("tiene " + negativos +"numeros negativos")
console.log("tiene " + ceros +"numeros ceros")