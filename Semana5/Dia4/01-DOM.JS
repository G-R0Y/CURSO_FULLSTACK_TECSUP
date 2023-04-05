let a = document.getElementsByTagName('input')

console.log(a)

console.log('////////////////////////////////////')

// recordemos que input es un html HTMLAllCollection, pero para poder iterar se ncesecita un arrary simple

/// vamos a usar un array.from para convertir en un array

const newInputs = Array.from(a)
console.log(newInputs)

console.log('////////////////////////////////////')

/// itreamos la variable inputs
/// map

newInputs.map((newInput) => {
    console.log('newInputs', newInput);
})

console.log('////////////////////////////////////')


const b = document.getElementsByTagName('form')
console.log(b)

const formulario = Array.from(b);
console.log(formulario)

const c = document.getElementById('form')
console.log(c)

const d = document.getElementsByClassName('form')
console.log(d)

/////acceder al boton

const boton = document.getElementsByClassName('btn_registro')

///// ejercicio

const divContent = Array.from(document.getElementsByTagName('div'));
console.log(divContent)

divContent.forEach((element)=>{
console.log(element)

})


//----------------------

const inputPassword=document.getElementById('input_password')
console.log(inputPassword)

inputPassword.style.backgroundColor='red'


//------------


const inputlastName=document.getElementsByClassName('input_lastName')
console.log(inputlastName)
inputlastName[0].style.color='blue';


const inputName=document.getElementsByTagName('input')
console.log(inputName)
inputName[0].style.backgroundColor='black';
inputName[0].style.color='white';
inputName[3].style.backgroundColor='green';
inputName[3].style.color='pink';
