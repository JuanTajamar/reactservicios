import React, { Component } from 'react'
import './MenuRutas.css'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul className="ul" style={{listStyleType: 'none'}}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/tabla/31">Tabla Multiplicar 31</NavLink>
            </li>
            <li>
                <NavLink to="/tabla/9">Tabla Multiplicar 9</NavLink>
            </li>
            <li>
                <NavLink to="/tabla/7">Tabla Multiplicar 7</NavLink>
            </li>
            <li>
                <NavLink to="/collatz/312">Collatz 312</NavLink>
            </li>
            <li>
                <NavLink to="/collatz/978665432">Collatz 978665432</NavLink>
            </li>
        </ul>
      </div>
    )
  }
}
