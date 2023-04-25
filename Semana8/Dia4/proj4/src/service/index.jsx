// este componente sera nuestroi container de apis
// una buena practica es tener la url del api en una variable

const Api_url = "https://pokeapi.co/api/v2/pokemon?limit=100"

// vamos a construir una funcion generica el cual se encarfa de hascer las peticiones
// donde este nuestro nuevo componete

export const getDataPokemon = async (url = Api_url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const final = await data.results
        console.log("data",final )

        return final
    }
    catch (error) {
        console.log(error.message);
    }

}