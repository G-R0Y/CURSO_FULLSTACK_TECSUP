// para crear rutasdebemos importar
//browserRouter esto embolvera todas las rutas
//Routes: hijos esto permitira crear rutas hijas
//ROute es el encargado  de recibit path

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Contacto from "../pages/Contacto"
import Apigithub from "../pages/Apigithub"
import Header from "../componentes/Header"
import Footer from "../componentes/Footer"
import Pokemon from "../pages/pokemon"

const Router = () => {

    return (
        <BrowserRouter>
            <Header />
            
            <Routes>
                <Route path="/" element={<Apigithub />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/pokemon" element={<Pokemon />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router