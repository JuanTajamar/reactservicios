import React, { Component } from 'react'
import Alumnos from './Alumnos'
import Global from '../../Global'
import axios from 'axios'

export default class Cursos extends Component {
    url = Global.urlCursos
    selectCurso = React.createRef()
    state = {
        cursos: [],
        selectedCurso: "",
        detallesAlumno: null
    }

    loadCursos = () => {
        let request = "api/alumnos/cursos"
        console.log(request)
        axios.get(this.url + request).then(response => {
            console.log("Leyendo cursos")
            this.setState({
                cursos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCursos();
    }

    findAlumnos = (event) => {
        event.preventDefault()
        let cursoAlumnos = this.selectCurso.current.value;
        this.setState({
            selectedCurso: cursoAlumnos
        })
    }

    detailsAlumno = (idAlumno) => {
        let request = "api/alumnos/findalumno/" + idAlumno;
        axios.get(this.url + request).then(response => {
            this.setState({
                detallesAlumno: response.data
            })
        })
    }

  render() {
    return (
      <div>
        <h1>Práctica React</h1>
        <form>
            <select ref={this.selectCurso} onChange={this.findAlumnos}>
                {
                    this.state.cursos.map((curso, index) => {
                        return(<option key={index}>{curso}</option>)
                    })
                }
            </select>       
        </form>
        {
            this.state.selectedCurso &&
            <Alumnos idcursos={this.state.selectedCurso} detailsAlumno={this.detailsAlumno}/>
        }
        {
            this.state.detallesAlumno &&
            <div>
                <h3>Detalles del Alumno</h3>
                <p>Nombre: {this.state.detallesAlumno.nombre}</p>
                <p>Apellidos: {this.state.detallesAlumno.apellidos}</p>
                <img src={this.state.detallesAlumno.imagen}/>
            </div>
        }
    </div>
    )
  }
}
