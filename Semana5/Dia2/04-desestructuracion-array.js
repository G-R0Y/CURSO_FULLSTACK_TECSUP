
const numeros = [5, 84, 65, 12, 14];
const x = numeros; //// eso no se hace
// x[0]=0;
console.log(numeros);
console.log(x)
console.log('/////////////////////////');


///        ...

const nuevosNumeros = [...numeros];
nuevosNumeros[0] = 55
console.log(numeros);
console.log(nuevosNumeros);
console.log('/////////////////////////');

////desestructuracion por posicion

const [a, b] = numeros
console.log('a', a);
console.log('b', b);

console.log('/////////////////////////');

////desestructuracion por rest(...)

const [n1, n2, ...resto] = numeros;
console.log('n1', n1);
console.log('n2', n2);
console.log('resto', resto);
console.log('/////////////////////////');

//////////////////////////////////

const useState = () => {
    const saludo = () => {
        console.log('adios');
    }
    const despedida = () => {
        console.log('chao');
    }
    return [saludo, despedida]
}
const [h1,h2]=useState();
console.log(useState());
h1()
h2()
