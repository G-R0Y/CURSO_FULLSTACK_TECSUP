import React, { useState } from 'react'

const letras = ["a", "e", "i", "o", "u", "m", "p", "t", "d", "c"]

const Frase = () => {
  const [palabra, setPalabra] = useState('')

  const concatenar = (valor) => {
    setPalabra(palabra + valor)
  };

  return (
    <div>
      <div>
        {
          letras.map((l, i) => {
            return <button
              onClick={function () {
                concatenar(l)
              }}
              key={i}
              className='btn btn-outline-danger'>{l}</button>
          })
        }
      </div>
      <h2>{palabra}</h2>
    </div>
  )
}

export default Frase


// El juego consiste en
// - Colocar  10 botones en fila, cada uno con 1 vocal y los otros 5 con algunas consonantes
// - El componente tendrá una variable de estado incial con el valor   "" => string vacío
// - Con cada click en cualquier botón, la variable de estado, irá modificando su valor
//   añadiendo o concatenando el valor del botón al que se le hizo click.
// - Mostrar en la UI el valor de la variable de estado o lo que es mismo decir, la frase que 
//   se irá mostrando