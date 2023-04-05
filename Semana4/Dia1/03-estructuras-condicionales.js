///////////////////// Estructuras condicionales


// const edad=21;
// if (edad>=18) {
//     console.log('ya es mayor de edad')
// } else {
//     console.log('aun no es mayor de edad')
// }


/////////////// hacer un algori para aplicar el 15%
//////////////////de descuento si es martes

// const dia='jueves', valComp = 500;
// let preFinal = 0;

// preFinal = valComp

// if (dia === 'martes') {
//     preFinal = valComp * 0.85
// }

// console.log('el precio final es: ' + preFinal)

//////////////////////modificar el anterio ejercicio para que el descuento se realice si es dia martes y vamor de compra excede los 1000

const dia='martes', valComp = 1500;
let preFinal = 0;

preFinal = valComp

if (dia === 'martes' && valComp>1000) {
    preFinal = valComp * 0.85
}

console.log('el precio final es: ' + preFinal)