import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        numeros: []
    }

    generarCollatz = () => {
        let numero = parseInt(this.props.numerocol);
        console.log(numero);
        let aux = [];
        while (numero != 1){
            if (numero % 2 == 0){
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1
            }
            aux.push(numero);
        }

        this.setState({
            numeros: aux
        })
    }

    componentDidMount = () => {
        this.generarCollatz();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numerocol != this.props.numerocol){
            this.generarCollatz();
        }
    }

  render() {
    return (
      <div>
        <h1>Conjetura Collatz</h1>
            <ul>
                {
                    this.state.numeros.map((numero, index) =>{
                        return (<li key={index}>{numero}</li>)
                    })
                }
            </ul>
      </div>
    )
  }
}