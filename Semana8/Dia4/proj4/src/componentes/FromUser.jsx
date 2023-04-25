import React, { useState } from 'react'
import { TextField, Button } from "@mui/material"

function FromUser() {



    const [valordeInput, setvalordeInput] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        password: ''
    })

    const handleInputValue = (fr) => {
        // extraer 2 cosas del event
        // 1 name de cada input
        // 2 value de cada inout
   
        const { name, value } = fr.target;


        setvalordeInput({
            ...valordeInput,
            [name]: value
        })
    }
  
    return (
        <div>
            <form>
                <h4>Formulario Registro</h4>
                <h5>Nombre: {valordeInput.nombre}</h5>
                <h5>Apellido: {valordeInput.apellido}</h5>
                <h5>Correo: {valordeInput.correo}</h5>
                <h5>Password: {valordeInput.password}</h5>
                <div>
                    <TextField onChange={handleInputValue} type="text" variant='outlined' label="ingrese su nombre" name='nombre' />
                </div>
                <div>
                    <TextField onChange={handleInputValue} type="text" variant='outlined' label="ingrese su apellido" name='apellido' />
                </div>
                <div>
                    <TextField onChange={handleInputValue} type="text" variant='outlined' label="ingrese su correo" name='correo' />
                </div>
                <div>
                    <TextField onChange={handleInputValue} type="password" variant='outlined' label="ingrese su password" name='password' />
                </div>



                <p>
                    <Button variant='contained' type='submit'>
                        Register
                    </Button>
                </p>
            </form>
        </div>
    )
}

export default FromUser