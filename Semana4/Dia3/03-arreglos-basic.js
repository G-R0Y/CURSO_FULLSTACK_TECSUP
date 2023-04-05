const libros = ['h1', 'h2', 'h3']
console.log(libros);
console.log(libros[1]);

const notas = [11, 3, 14, 16, 17, 18]
console.log('notas', notas);
console.log('la suma de la 1ra y ultima es ', notas[0] + notas[5]);

///////////////////////////
//////  reasiognacion de un elemto
///////////////////////////

notas[4] = 20
console.log('notas nuevas', notas);

///////////////////////////
//////  propiedades
///////////////////////////

a = notas.length    ///deveulve el numero de elementos
console.log(a);

notas.push(3);
console.log(notas);

///////////////////////////
//////  recorriendo un arreglo
///////////////////////////

let z = 0;
for (let a = 0; a < notas.length; a++) {
    z = notas[a] + z
    console.log(notas[a])
}
console.log('suma de notas es ',z);

///////////////////////////
//////
///////////////////////////

let b = 0, par="", impar="";

for (let a = 0; a < notas.length; a++) {
    if(notas[a]%2===0){
        b=b+1
        par=par+" "+notas[a]
    }else{
        impar=impar+" "+notas[a]
    }
}
console.log('los numeros par son '+par);
console.log('los numeros impar son ', impar);


///////////////////////////
//////
///////////////////////////

