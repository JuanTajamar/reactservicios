import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Empleados extends Component {
    url = Global.urlEmpleados

    state = {
        empleados: [],
        texto: ""
    }

    componentDidUpdate = (oldProps) => {
        // Dibujamos las nuevas y las antiguas
        console.log("current: " + this.props.iddepartamento)
        console.log("old: " + oldProps.iddepartamento)
        
        // Solamente actualizamos state si props ha cambiado
        if(oldProps.iddepartamento != this.props.iddepartamento) {
            this.loadEmpleados();
        }
    }

    loadEmpleados = () => {
        let idDepartamento = this.props.iddepartamento
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento
        axios.get(this.url + request).then(response => {
            console.log("Leyendo empleados")
            this.setState({
                empleados: response.data
            })
        })
    }
    
    componentDidMount = () => {
        this.loadEmpleados();
    }


  render() {
    return (
      <div>
        <h2 style={{color: "blue"}}>Estos son los empleados {this.props.iddepartamento}</h2>
        <h3>{this.state.texto}</h3>
        <ul>
            {
                this.state.empleados.map((empleado, index) => {
                    return (<li key={index}>{empleado.apellido} - {empleado.oficio} - {empleado.departamento}</li>)
                } )
            }  
        </ul>
      </div>
    )
  }
}
