import React, { Component } from 'react'
import './MenuRutas.css'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul className="ul" style={{listStyleType: 'none'}}>
            <li>
                <a href='/' style={{textDecoration: 'none'}}>Home</a>
            </li>
            <li>
                <a href='/tabla/21' style={{textDecoration: 'none'}}>Tabla Multiplicar</a>
            </li>
            <li>
                <a href='/tabla/8' style={{textDecoration: 'none'}}>Tabla Multiplicar</a>
            </li>
            <li>
                <a href='/tabla/2' style={{textDecoration: 'none'}}>Tabla Multiplicar</a>
            </li>
            <li>
                <a href='/collatz/5' style={{textDecoration: 'none'}}>Collatz</a>
            </li>
        </ul>
      </div>
    )
  }
}
