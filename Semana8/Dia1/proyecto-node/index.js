// const axios = require('axios')
import axios from 'axios';
import {getNameAbilities, saludar as saludarv2} from "./util.js";
import miSUma from './util.js'


axios.get('https://pokeapi.co/api/v2/pokemon/4/').then((data)=>{
    const pokemon = getNameAbilities(data.data)
    console.log(pokemon);
})

console.log(miSUma(20,23));

saludarv2()
