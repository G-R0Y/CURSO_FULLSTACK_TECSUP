// en js podemos mannipular y tmb escribir este documento

document.write('hello')

//vamos a crear una lista usando js
//1. insertar una lista dentro del div #container-list

////////Insertar elementos dentro del mi lista li/////////////


// paso 1 captura el elmento al cual usaras
const containerList=document.getElementById('container-list');


/// paso 2creas elemetos
const ul=document.createElement('ul'); //dentro de js existe una funcion llamada createElement la cual nos permite crear elemtnos
ul.className = "lista";

/// paso 3 para iterar debes convertir en un array

const inputs=Array.from(document.querySelectorAll('input'))
inputs.forEach((input)=>{
    const li=document.createElement("li")
    const contenido=document.createTextNode(input.value)
    li.appendChild(contenido)
    ul.appendChild(li)
})
 console.log(ul)
 containerList.appendChild(ul)
