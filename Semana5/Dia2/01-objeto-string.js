// propiedades de los string

let frase='LOS PROGRAMADORES son realizadores de sueños'

console.log(frase)

////length    retorna la cantidad de caracter

console.log(frase.length)

//// toLowerCase retorna  a minusculas

console.log(frase.toLowerCase())

//// toUpperCase retorna  a minusculas

console.log(frase.toUpperCase())


///////trim() retorna el string sin espacio solo de los extremos

console.log('trim','       hola  mundo        '.trim())

////?parametro opcional
/////substr(comienzo, extencion?)
//// si no se manda extension  eñ retorno sear desde la pos indicadad hasta el final

console.log('frase desde la pos 9 por 4 caracteres')
console.log(frase.substr(9,4))

/////substring(comienzo, final)

console.log(frase.substring(9,13))

/// include (buscar,posiciom?) retorna verdadero o false si la palabra se encuentra

console.log(frase.includes('son'))

//////indexOf(texto,posicion?) indica en que posicion empieza el texto

console.log(frase.indexOf('son'))
















