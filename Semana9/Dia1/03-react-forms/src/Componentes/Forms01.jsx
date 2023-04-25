// FORMULARIOS CONTROLADOS
// /son aquellos que en los input tienen asignados atributos value y onchange
// y ademas estan controlados por una o mas variables de estado

import { useState } from "react"

function Forms01() {

    const [formulario, setFormulario] = useState({
        edad: 0,
        nacionalidad: "ec",
        genero: "m",
        languaje: {
            html: true,
            js: false,
            css: false
        }
    });

    // console.log(formulario);

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            // [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
            [e.target.name]: e.target.value
        })
    };

    const handleChangeCheck = (e) => {
  
        setFormulario({
            ...formulario.languaje,
            [e.target.name]: e.target.checked
        })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Mandando Formulario");
        console.log(formulario);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="input-edad" className="form-label">Edad:</label>
                            <input
                                type="number"
                                id="input-edad"
                                className="form-control"
                                value={formulario.edad}
                                onChange={handleChange}
                                name="edad"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="select-nacionalidad" className="form-label">Nacionalidad </label>
                            <select
                                name="nacionalidad"
                                id="select-nacionalidad"
                                className="form-select"
                                onChange={handleChange}
                                value={formulario.nacionalidad}
                            >
                                <option value="pe">Peruano</option>
                                <option value="ec">Ecuatoriano</option>
                                <option value="ch">Chileno</option>
                                <option value="br">Brasileño</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <h4>Sexo:</h4>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="genero"
                                    id="genero-masculino"
                                    value="m"
                                    onChange={handleChange}
                                    checked={formulario.genero === "m"}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="genero-masculino">
                                    Masculino
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="genero"
                                    id="genero-femenino"
                                    value="f"
                                    onChange={handleChange}
                                    checked={formulario.genero === "f"}
                                />

                                <label
                                    className="form-check-label"
                                    htmlFor="genero-femenino">
                                    Femenino
                                </label>
                            </div>


                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="check-html"
                                    name="html"
                                    onChange={handleChangeCheck}
                                    checked={formulario.languaje.html}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="check-html">
                                    HTML
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="check-js"
                                    name="js"
                                    onChange={handleChangeCheck}
                                    checked={formulario.languaje.js}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="check-js">
                                    JS
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="check-css"
                                    name="css"
                                    onChange={handleChangeCheck}
                                    checked={formulario.languaje.css}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="check-css">
                                    CSS
                                </label>
                            </div>


                        </div>
                        <button type="submit" className="btn btn-danger">
                            enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forms01