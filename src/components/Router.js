import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'
import { useParams } from 'react-router-dom'
import Collatz from './Collatz'
import MenuRutas from './MenuRutas'

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
        // Esta funcion nos servira para capturar los parametros recibidos en una ruta y enviarlos con props a nuestro component
        // Voy a enviar un parametro llamado "minumero"
        let {minumero} = useParams();
        // Devolvemos el componente tabla multiplicar con sus props
        return <TablaMultiplicar numero={minumero}/>
    }

    function CollatzElement() {
        let {numerocollatz} = useParams();
        return <Collatz numerocol={numerocollatz}/>
    }

    return (
      <BrowserRouter>
        <MenuRutas/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tabla/:minumero" element={<TablaMultiplicarElement/>}/>
            <Route path="/collatz/:numerocollatz" element={<CollatzElement/>}/>
            {/* Para incluir las rutas que no existe con una pagina 404
            personalizada debemos utilizar el asterisco y siempre debe
            ser la ultima ruta */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
