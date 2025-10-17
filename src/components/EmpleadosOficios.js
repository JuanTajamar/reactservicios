import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosOficios extends Component {
    urlEmpleados = Global.urlEmpleados;
    idOficio = React.createRef()
    state = {
        empleados: [],
        oficios: []
    }

    findEmpleados = (event) => {
        event.preventDefault();
        let idEmpleado = this.idOficio.current.value; 
        let request = "api/Empleados/EmpleadosOficio/" + idEmpleado
        axios.get(this.urlEmpleados + request).then(response => {

            this.setState({
                empleados: response.data
            })
        })
    }

    loadOficios = () => {
        let request = "api/Empleados"
        axios.get(this.urlEmpleados + request).then(response => {
            var datos = response.data
            var responseOficios = [...new Set(datos.map(oficio => oficio.oficio))]

            this.setState({
                oficios: responseOficios
            })
        })
    }

    componentDidMount = () => {
        this.loadOficios();
    }

  render() {
    return (
      <div>
        <h1>API Empleados Oficios</h1>
        <form>
            <select ref={this.idOficio}>
                {
                    this.state.oficios.map((oficio, index) => {
                        return(<option key={index} value={oficio}>{oficio}</option>)
                    })
                }
            </select>
            <button onClick={this.findEmpleados}>Buscar empleados</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.empleados.map((empleado, index) => {
                            return(<tr key={index}>
                                <td>{empleado.apellido}</td>
                                <td>{empleado.oficio}</td>
                                <td>{empleado.salario}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>    
        </form>

        </div>
    )
  }
}
