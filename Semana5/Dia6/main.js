//adEventListener
//es mas legible

const button = document.querySelector('#btn-prueba');

button.addEventListener('click', () => { //en vez de ()=> tambien se utiliza funcion()
    alert('esta es una prueba')
})

const btnError = document.querySelector('#btn-error')
btnError.addEventListener('click', () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Algo salio mal compañero!',
    })

})

const btnPregunta = document.querySelector('#btn-pregunta')
btnPregunta.addEventListener('click', () => {
    Swal.fire({
        icon: 'question',
        title: '¿como estas?',

    })

})
const btnPeligro = document.querySelector('#btn-peligro')
btnPeligro.addEventListener('click', () => {
    Swal.fire({
        icon: 'warning',
        title: 'Peligro!!',
        text: 'eliminaras datos',

    })

})

const btnSatisfactorio = document.querySelector('#btn-satisfactorio')
btnSatisfactorio.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Muy bien!!',
    })

})

const btnInfo = document.querySelector('#btn-info')
btnInfo.addEventListener('click', () => {
    Swal.fire({
        icon: 'info',
        title: 'vas mejorando',
    })

})

/////////////////

const btnAlertaBoton = document.querySelector('#btn-alert-botones')
btnAlertaBoton.addEventListener('click', () => {
    Swal.fire({
        title: 'confirmar?',
        text: "Estas seguro de realizar este procedimiento",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si, confirmar procedimiento'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'procedimiento confirmado'
          )
        }
      })
    })


    const btnNotify = document.querySelector('#btn-notificaion')
    btnNotify.addEventListener('click', () => {
        Swal.fire({
            icon: 'success',
            title: 'Muy bien!!',
        })
    
    })

    const btnImages = document.querySelector('#btn-img')
    btnImages.addEventListener('click', () => {
        Swal.fire({
            title: 'Pikachu',
            text: 'pokemos tipo elctrico',
            imageUrl: 'https://nintendo.pe/wp-content/uploads/2018/05/f51d08be05919290355ac004cdd5c2d6.png',
            imageWidth: 400,
            imageHeight: 400,
            
          })
    })

    const btnAlertCUstom = document.querySelector('#btn-alerta-custom')
    btnAlertCUstom.addEventListener('click', () => {
        Swal.fire({
            title: 'Pikachu',
            text: 'atack trueno',
            imageUrl: 'https://media.tenor.com/-VYWaSmWx2QAAAAC/thunderbolt-pikachu.gif',
            imageWidth: 400,
            imageHeight: 400,
            background: 'red'
          })
    })

    const btnInputs = document.querySelector('#btn-alerta-inputs')
    btnInputs.addEventListener('click', () => {
        Swal.fire({
            title: 'HOLA',
            text: 'ingresa tu nombre',
            input: 'text'
          })
    })

