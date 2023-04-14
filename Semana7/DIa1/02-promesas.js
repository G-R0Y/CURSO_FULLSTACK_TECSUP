// las promesas tienen 2 partes
// 1 creacion
// 2 consumo

// por lo general solo consumimos y no creamos

//1 creacion

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const aleatorio = Math.round(Math.random() * 100);
        if (aleatorio % 2 === 0) {
            resolve('exitoso!');
        } else {
            reject('error 404');
        }

    }, 2000);
})

//2 consumo
// promesa.then(()=>{})
// then es el metodo que recibe un callbxk con la data que la promesa nos retorna
// cuando dicha promesa sea exitosa
// catch es lo q retona cuando la promesa falla

miPromesa.then((data) => {

    console.log('data', data);
}).catch((error) => {
    console.log('error', error);
}).finally(()=>{
console.log('la verdadera despedida');
});
