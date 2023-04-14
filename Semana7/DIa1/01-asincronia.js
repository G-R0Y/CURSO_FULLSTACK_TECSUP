console.log(1);
console.log(2);

function obtenerDatos(dni, callback) {
    console.log(dni);
    setTimeout(() => {
        //return 'gianroy santos' //nunca funcionaria
        callback('Gianroy Santos')
        // console.log('Gianroy Santos');
    }, 1000)
}

obtenerDatos('10101010', (nombre) => {
    console.log(nombre);
})
console.log(4);
console.log(5);