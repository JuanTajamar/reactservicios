import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global'
import axios from 'axios'

export default class Departamentos extends Component {
    url = Global.urlDepartamentos;
    selectDepartamentos = React.createRef();
    state = {
        departamentos: [],
        idDepartamento: 0
    }

    loadDepartamentos = () => {
        let request = "webresources/departamentos";
        axios.get(this.url + request).then(response => {
            console.log("Leyendo departamentos")
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos()
    }

    findEmpleados = (event) => {
        event.preventDefault();
        let iddepartamento = this.selectDepartamentos.current.value;
        this.setState({
            idDepartamento: iddepartamento
        })

    }

  render() {
    return (
      <div>
        <h1>Estos son los departamentos</h1>
        <form>
            <select ref={this.selectDepartamentos}>
                {
                    this.state.departamentos.map((departamento, index) =>{
                        return (<option key={index} value={departamento.numero}>{departamento.nombre}</option>)
                    })
                }
            </select>
            <button onClick={this.findEmpleados}>Buscar empelados</button>
        </form>
        {
            this.state.idDepartamento != 0 &&
            <Empleados iddepartamento={this.state.idDepartamento}/>
        }
        
      </div>
    )
  }
}
