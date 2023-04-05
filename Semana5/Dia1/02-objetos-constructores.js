/////un objeto puede tener funciones como atributos

const vehiculo = {
    marca: 'audi',
    modelo: 'q5',
    mantenimientos:
        [
            {
                fecha: '05/05/23',
                kilometraje: 17000
                
            },
            {
                fecha: '05/05/24',
                kilometraje: 27000
            }
            
        ],
    imprimirMarcaYModelo: function () {
        console.log(this)
        console.log(this.marca, this.modelo)
    }
}
// console.log(vehiculo);
vehiculo.imprimirMarcaYModelo()


////////NO COPIAR OBJETOD DE LA SIGUIENTE MANERA

const vehiculo2 = vehiculo;
vehiculo2.modelo = 'q3'
console.log('vehiculo1', vehiculo);
console.log('vehiculo12', vehiculo2);


////// FUNCOIN QUE CREA OBJETOS

function creadorDeVehiculos(marca = '', modelo = '', anio = 0, mantenimientos = []) {
    const vehiculoGenerico = {
        marca: marca,
        modelo: modelo,
        anio: anio,
        mantenimientos: []
    };
    return vehiculoGenerico;
}

function mantenimiento(fecha = '', kilometraje = 0, aceite =false){
return{
    fecha:fecha,
    kilometraje:kilometraje,
    aceite:aceite
}
}

const mazdaCX3 = creadorDeVehiculos('as', 'dsad', 2023, [mantenimiento('05/05/2020',1526,true)]);
const bmwX4 = creadorDeVehiculos('dsad', 'sdfdsf', 2024, []);
mazdaCX3.anio = 2023;
bmwX4.anio = 2024;
console.log('mazda', mazdaCX3);
console.log('bmwX4', bmwX4);
