function artista() {

    let a = document.getElementById('ingresarTexto2');
    let b = document.getElementById('titulo2');
    let c = `tu artista favorito es ${a.value}`;

    b.textContent = c

}

// //////////////////////

const comenzarAlarma = () => {

    setTimeout(tiempoCumplido, 1000 * 3);
}


const tiempoCumplido = () => {
    alert('se acabo el tiempo')
}

//////////////////////

const prender = () => {
    let a = document.getElementById('tiempoElegido')
    setTimeout(tiempoAlarma, 1000 * a.value);
}

const tiempoAlarma = () => {
    alert('se acabo el tiempo')
    let b= document.getElementById('textoAlarma')
    textoAlarma.textContent='ENCENDIDO'
    textoAlarma.style.color= "green";
}

const apagar = () => {
    let b= document.getElementById('textoAlarma')
    textoAlarma.textContent='APAGADO'
    textoAlarma.style.color= "red";
}
