// 
// el uso de la sentencia await sirve para esperar
// el resultado que retorna una promesa y guardarlo en una var
// l  sentencia await solo se puede usar dentro de una funcion async
const getProductos = async () => {
    const response = await axios.get('https://reqres.in/api/users/2');
    // console.log('response', response);
    throw 'errorrrr';
    // return response.data
}

console.log(1);
// getProductos();

getProductos()
    .then((data) => {
        console.log('data', data);
    })
    .catch((error)=>{
        console.log('error'.error);
    })
console.log(2);
console.log(3);
console.log(4);