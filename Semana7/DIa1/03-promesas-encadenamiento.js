// debemos encanear promesas si y solo si una depende de otra

const categorias = [
    { id: 1, name: 'terror' },
    { id: 2, name: 'comedia' },
    { id: 3, name: 'accion' }
];

const peliculas = [
    {
        categoria: 'comedia',
        titutlo: 'El tonto y el más tonto'
    },
    {
        categoria: 'comedia',
        titutlo: 'La máscara'
    },
    {
        categoria: 'terror',
        titutlo: 'La monja'
    },
    {
        categoria: 'terror',
        titutlo: 'Actividad Paranormal'
    },
    {
        categoria: 'accion',
        titutlo: 'Terminator I'
    },
    {
        categoria: 'accion',
        titutlo: 'Rápidos y Curiosos'
    }
];

const getCategoriaById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const categoriaEncontrada = categorias.find((c) => c.id === id);
            if (categoriaEncontrada) {
                resolve(categoriaEncontrada.name);
            } else {
                reject('nay');
            }
        }, 2000);
    });
};
const getPeliculasByCategoria = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pelis = peliculas
                .filter((p) => name === p.categoria)
            // .map((p) => p.titutlo);
            resolve(pelis);
        }, 2000);
    });
};

// SUPONER QUE SOLO DISPONGO 1 DATO

const id = 12;
// getCategoriaById(id).then((nombre)=>{
// console.log('nombre', nombre);
// })

const categoriaEncontrada = undefined;
getCategoriaById(id).then((categoria) => {
    console.log(categoria);
    getPeliculasByCategoria(categoria).then((pelis) => {
        console.log(pelis, 'pelis')
    })
}).catch((error) => {
    console.log('error', error);
});

////forma 2 encadenar promesas

getCategoriaById(id).then((nombreDeCategoria) => {
    return getPeliculasByCategoria(nombreDeCategoria)
})
    .then((pelisEncontradas) => {
        console.log('pelis encontradas', pelisEncontradas);
    }).catch((errorGenerico) => {
        console.log('error generico', errorGenerico);
    })

///forma 3, en una forma async usando await
console.log('-------------------');

const caller = async () => {
    const nombreCat = await getCategoriaById(1)
    const pelis = await getPeliculasByCategoria(nombreCat)
    console.log('pelis',pelis);
};

caller()
