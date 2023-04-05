function validarSiesNumero(numero, tipo) {
    // debugger
    return isNaN(numero) ? `Mensaje Error: no se peude ${tipo}` : numero;
}

function sumar(n1, n2) {
    // debugger
    const suma = +n1 + +n2

    return validarSiesNumero(suma, "sumar")
}

function restar(n1, n2) {
    const resta = +n1 - +n2
    return validarSiesNumero(resta, "restar")

}

function multiplicar(n1, n2) {
    const multiplicacion = +n1 * +n2
    return validarSiesNumero(multiplicacion, "multiplicar")
}

function dividir(n1, n2) {
    const divicion = +n1 / +n2
    return validarSiesNumero(divicion, "dividir")
}


