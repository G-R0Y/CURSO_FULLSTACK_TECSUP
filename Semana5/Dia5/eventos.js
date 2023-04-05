

function imprimir() {
    console.log("hola desde js");
}

function calculadorHTML(parametro) {
    // debugger
    let a = document.getElementById('numero1').value;
    let b = document.getElementById('numero2').value;
    let resultado = 0
// debugger

    if (a === "" || b === "") {
        alert('ingresa los 2 valores')
    }
    if (parametro === '+') {
        resultado = sumar(a, b)
    }
    if (parametro === '-') {
        resultado = restar(a, b)
    }
    if (parametro === '*') {
        resultado = multiplicar(a, b)
    }
    if (parametro === '/') {
        resultado = dividir(a, b)
    }

    const p = document.createElement('p');
    const value = document.createTextNode(resultado)
    p.appendChild(value)

    const contenedor = document.querySelector('#resultado');
    contenedor.appendChild(p)

}