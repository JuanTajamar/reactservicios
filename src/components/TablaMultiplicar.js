import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state =  {
        tabla: []
    }

    generarTablaMultipicar = () => {
        let aux = []
        let numero = parseInt(this.props.numero)
        for (let i = 1; i <= 10; i++) {
            var resultado = numero * i;
            aux.push(resultado);
        }

        this.setState({
            tabla: aux
        })
    }

    componentDidMount = () => {
        this.generarTablaMultipicar();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numero != this.props.numero){
            this.generarTablaMultipicar();
        }
    }
  render() {
    return (
      <div>
        <h1>Tabla de múltiplicar</h1>
        <h3>Numero recibido es {this.props.numero}</h3>
        <ul>
            {
                this.state.tabla.map((numero, index) => {
                    return(<li key={index}>{numero}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
