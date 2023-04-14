const getUser = async () => {
    const URL_USER = 'https://reqres.in/api/users';
    //el metodo HTTP por defecto es GET (en caso no se especifique)
    const response = await fetch(URL_USER, {
        method: 'GET',
        headers: {}
    });
    const data = await response.json();
    console.log('getUsers', data);
};

// requeste con metodo get sin headres ni params

const getNProducts = async () => {
    const URL = 'https://fakestoreapi.com/products?limit=5&sort=desc';
    const response = await fetch(URL);
    const data = await response.json()
    console.log('getNProdutcs', data);
}

//request con POST sin headers con body

const postCreateProduct = async () => {
    const producto = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    const URL1 = 'https://fakestoreapi.com/products'

    const response = await fetch(URL1, {
        method: 'POST',
        body: JSON.stringify(producto)
    })
    const data = await response.json();
    console.log('postCreateProduct', data);
}