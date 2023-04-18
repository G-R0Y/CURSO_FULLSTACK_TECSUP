
export const getNameAbilities = (pokemon) => {

    const result = {
        name: pokemon.name,
        abilities: pokemon.abilities.map((habilidad) => {
            return habilidad.ability.name
        })
    };
    return result
};


export const saludar =()=> {console.log('buenas noches')};



 const suma = (a, b) => a + b

//  esporta una funcion o variable por defecto por archivo
// por archivo se permite maximo 1 exportacoin por defecto
 export default suma
