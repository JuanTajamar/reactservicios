import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios';


export default class Alumnos extends Component {
  url = Global.urlCursos ;


  state = {
    alumnos: []
  }

  loadAlumnos = () => {
    let alumnos = this.props.idcursos
    console.log("ID: " + alumnos)
    let request = "api/alumnos/filtrarcurso/" + alumnos
    console.log("URL Completa: " + this.url + request)
    axios.get(this.url + request).then(response => {
        this.setState({
            alumnos: response.data
        })
    })
  }

  showSDetails = (event) => {
    let idAlumno = event.target.value;
    this.props.detailsAlumno(idAlumno);
  }

  componentDidMount = () => {
    this.loadAlumnos();
  }

  componentDidUpdate = (oldProps) => {
    if(oldProps.idcursos !== this.props.idcursos) {
        this.loadAlumnos();
    }
  }



  render() {
    return (
      <div>
        <ul>
            {
                this.state.alumnos.map((alumno, index) => {
                    return(<li key={index}>{alumno.nombre} {alumno.apellidos} <button onClick={this.showSDetails} value={alumno.idAlumno}>Detalles</button></li>)
                })
            }
            
        </ul>
      </div>
    )
  }
}
