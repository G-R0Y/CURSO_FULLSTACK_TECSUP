///// una funcion es un conjunto de soluciones para realizar una tares


function nombreDeLaFuncion() {
    //una vez declarada la funcion todo el codigo que s haga
    //dentro de esta solo se ejecutara caundo se llame la funcion

    console.log("mi primera funcion");
    alert("mi primera funcion")
}
// nombreDeLaFuncion()


function sumar(numero1, numero2) {

    let a = +numero1 + +numero2
    console.log("la suma es ", a)
}

sumar(2, 3)


///// funcion flecha


const saludar = (numer1, numer2) => {
    let b = +numer1 + +numer2
    console.log("la suma es ", b)
}
saludar(2, 3)


/////////// funcion saludar al alumno


const saludo = (nombre, apellido) => {
    // return "hola mi nombre es " + nombre + " y mi apellido es "+ apellido
    return `hola mi nombre es ${nombre} y mi apellido es ${apellido}`
}
console.log(saludo("gian", "huaracca"))


/////////// cambiar datros en html


function mostrarNombre() {
    
    let elementoNombre = document.getElementById('nombreUsuario');
    let titulo = document.getElementById('reemplazo');
    let mensaje = 'tu te llamas ' + elementoNombre.value;

    titulo.textContent = mensaje;

}



///////////// 


function mostrarTexto() {
    
    let elementoNombre = document.getElementById('ingresarTexto');
    let lol = document.getElementById('titulo');
    titulo.textContent = elementoNombre.value;

}



///////////// ejercicio 2
function mostrarTexto2() {
    
    let elementoNombre = document.getElementById('ingresarTexto2');
    let lol = document.getElementById('titulo2');
    let aviso= 'mi artista favorito es ' + elementoNombre.value;

    titulo2.textContent = aviso;

}
