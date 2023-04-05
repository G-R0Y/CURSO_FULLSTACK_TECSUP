//// querySelector y querySelectorAll

// ambos selectores nos permiten usar elementosd del HTML

//// con clases

const inputName = document.querySelector('.input_name')
console.log(inputName.value);

const inputPassword = document.querySelector('#input_password')
console.log(inputPassword.value);

const form = document.querySelector('form')
console.log(form);

////esto retorna un Nodelist y es compatible con foreach

const inputs = document.querySelectorAll('input')
console.log(inputs)

//quiero filtrar e iterar este Nodelist

const arrayinputtext = [];

inputs.forEach((input) => {
    if (input.type === 'text') {
        arrayinputtext.push(input);
    }
});
console.log(arrayinputtext)

/////////---------------

const araayconvertido = Array.from(inputs)
console.log(araayconvertido);
console.log('-----------------------------');



// const inputAll = document.querySelectorAll('input')
//quiero filtrar e iterar este Nodelist

const arrayOfInput = [];

inputAll.forEach((input) => {
    if (input.type === 'text') {
        arrayinputtext.push(input);
    }
});
console.log(arrayinputtext)