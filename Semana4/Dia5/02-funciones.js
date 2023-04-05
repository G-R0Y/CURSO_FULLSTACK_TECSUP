console.log(average(2, 4));

function average(n1, n2) {
    return (n1 + n2) / 2;
}



const calcAge = (anioNac) => {
    return 2023 - anioNac
}
console.log(calcAge(1993));

const calcAge2 = (anioNac) => 2023 - anioNac;
console.log(calcAge2(1993));





/////////////// SUMAR VARIOS NUMEROSSSS

const sumarNumeros = (...numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    return suma
}

console.log(sumarNumeros(2, 4, 6, 8));


////////// TERNARIOS      son como condicionales donde se puede dar como resultado
///////////////////////// valores numericos, boleanos o texto

const ternarios = (n1, n2) => {
    return n1 > n2 ? n1 : n2;
}
console.log(ternarios(13,27))

