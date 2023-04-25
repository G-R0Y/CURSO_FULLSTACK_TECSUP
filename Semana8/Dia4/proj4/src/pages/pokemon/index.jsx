import { useState, useEffect } from "react";
import { getDataPokemon } from "../../service";
import ModalPokemon from "../../componentes/Modal_pokemon";
import React from 'react'

function Pokemon() {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world"
    const [pokemons, setPokemons] = useState([])

    const fetPokemonList = async () => {
        const listPokemons = await getDataPokemon()
        setPokemons(listPokemons)
        console.log('ddsd', listPokemons);
    };



    useEffect(() => {
        fetPokemonList()
    }, [])


    // for (let a = 1; a < 3; a++) {
    //     console.log(a);
    // }

    return (
        <div className="pokemons">
            {
                pokemons.map((val, i) => {
                    const imgurlfinal = `${imgUrl}/${i + 1}.svg`
                    return (
                        <div className="pokemons1" key={i}>
                            <img className="img" src={imgurlfinal} />
                            <h2>{val.name}</h2>
                            <ModalPokemon />
                        </div>
                    )
                })

            }

        </div>
    )
}

export default Pokemon