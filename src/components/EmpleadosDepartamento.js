import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosDepartamento extends Component {
    urlEmpleados = Global.urlEmpleados;
    urlDeparmentos = Global.urlDepartamentos;
    selectDepartamento = React.createRef();

    state = {
        empleados: [],
        departamentos: []
    }

    buscarEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento
        axios.get(this.urlEmpleados + request).then(response => {
            console.log("Leyendo empleados")
            this.setState({
                empleados: response.data
            })
        })

    }

    loadDepartamentos = () => {
        let request = "webresources/departamentos"
        axios.get(this.urlDeparmentos + request).then(response => {
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos()
    }

  render() {
    return (
      <div>
        <h1>API Empleados Departamentos</h1>
        <form>
            <label>Indique un departamento</label>
            <select ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((departamento, index) => {
                        return(<option key={index} value={departamento.numero}>{departamento.nombre}</option>)
                    })
                }
            </select>
            <button onClick={this.buscarEmpleados}>Buscar empleados</button>
            <ul>
                {
                    this.state.empleados.map((empleado, index) => {
                        return(<li key={index} style={{listStyleType: "none"}}>{empleado.apellido}</li>)
                    })
                }
            </ul>
        </form>
      </div>
    )
  }
}
