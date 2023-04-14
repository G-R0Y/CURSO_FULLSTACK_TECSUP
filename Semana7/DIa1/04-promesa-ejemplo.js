const url = 'https://fakestoreapi.com/products';
const contenedor = document.querySelector('#contenedor');

const obtenerProductos = () => {
    axios.get(url).then((response) => {
        console.log('response', response.data);
        dibujarProductos(response.data);
    });
};

const dibujarProductos = (productos = []) => {
    productos.forEach((prod) => {
        const columna = document.createElement('div');
        columna.classList.add('col-md-3', 'cards','m-2');

        const img = document.createElement('img')
        img.src = prod.image
        img.classList.add('card-img-top', 'imagen')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title', 'text-center', 'mt-4', 'mb-4', 'titulo')
        cardTitle.textContent = prod.title

        const cardText = document.createElement('p')
        cardText.classList.add('card-text', 'descripcion','mb-3')
        cardText.className
        cardText.textContent = prod.description

        const foot = document.createElement('div');
        foot.classList.add('foot','mb-3');

        const estrella = document.createElement('i')
        estrella.classList.add('estrella','fa-solid','fa-star')
        estrella.textContent = prod.rating.rate


        const precio = document.createElement('i')
        precio.classList.add('precio','fa-solid','fa-sack-dollar')
        precio.textContent = prod.price

        contenedor.appendChild(columna);
        columna.appendChild(img);
        columna.appendChild(cardBody);
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        columna.appendChild(foot)
        foot.appendChild(estrella)
        foot.appendChild(precio)
        // TODO: completar la tarea
    });
};

obtenerProductos();