///OBJETOS

// const persona =['jorge',20,'calzado'];
// const persona1 =['yuli',34,'calzado','Ing Indutrial',['blanco','verde']];


// console.log(persona1[4][1])


const persona = {
    nombre: 'yuli',
    dni: '12345678',
    telefono: '987654321',
    idiomas: ['español', 'ingles', 'frances'],
}

console.log(persona.idiomas[1])

/////// INYECTANDO UN NUEVO IDIONMA  ALA PERSONA

persona.idiomas.push('Aymara')

console.log(persona.idiomas)

persona.telefono = '989518845'

console.log(persona.telefono)

///AGREGANDO UN NUEVO ATRIBUTO (no se recomienda agredgar nuevos atributos a un objeto)
persona.direccion={}
persona.direccion.calle = 'calle lima'
persona.direccion.distrito = 'Miraflores'
persona.direccion.ciudad = 'Arequipa'



//// AGREGANDO ATRIBUTO A UNA PERSONA forma 2

persona.estudios={
    primaria: 'Escuela de los andes',
    secundaria:'colegio dolores',
    superior:'UMNSM'
}
console.log(persona)