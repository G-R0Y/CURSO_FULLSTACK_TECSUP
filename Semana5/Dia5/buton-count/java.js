

function trabajo(parametro) {
    debugger
    let a = document.querySelector('#valor').value
    let b = a.valueOf
    console.log(a)

    if (parametro === '0') {
        a.textContent = 0

    } else if (parametro === "+") {
        b++
    }
    if (parametro === '-') {
        b--
    }
    a.textContent = b
}

