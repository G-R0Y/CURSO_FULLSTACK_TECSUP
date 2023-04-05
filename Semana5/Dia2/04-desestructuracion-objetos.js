const producto = {
    nombre: 'iphone 14pro',
    precio: 5500,
    codigo: 5,
    stock:80,
    colores:['negro','azul','rojo']
}


//////// una forma correcta de copiar
//////// o clonar un obj es:

const producto2={...producto};

console.log(producto2);
console.log('/////////////////////////')

////// desestructurar atributos

const{codigo, precio, ...rest}=producto;
console.log(codigo);
console.log(precio);
console.log(rest);
console.log('/////////////////////////')

////// desestructurando atributos con nuevos nombres de variables

const {precio:precio2,stock:cuantoshay, ...lol}=producto;
console.log(precio2);
console.log(cuantoshay);
console.log(lol);
console.log('/////////////////////////')

//////////example

const random=({max,min})=>{
    // const {max,min} = atributos;
    return Math.random()*(max-min)+min;
}

console.log(random({max:200,min:100}))

