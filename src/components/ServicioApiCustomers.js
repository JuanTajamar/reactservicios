import React, { Component } from 'react'
import axios from 'axios'

export default class ServicioApiCustomers extends Component {
    state = {
        customers: []
    }
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";
    // Creamos un metodo para cargar los clientes
    loadCustomers = () => {
        console.log("Antes del servicio");
        axios.get(this.url).then(response => {
            console.log("Leyendo servicio");
            // La informacion viene en "response.data"
            this.setState({
                customers: response.data.value
            })
        })
        console.log("Después del servicio");
    }
    componentDidMount = () => {
        console.log("Creando component")
        this.loadCustomers();
    }
  render() {
    return (
      <div>
        <h1>Servicio Api Customers</h1>
        <button>Load Customers</button>
        {
            this.state.customers.map((cliente, index) => {
                return(<h3 key={index} style={{color:"blue"}}>{cliente.ContactName}</h3>)
            })
        }
      </div>
    )
  }
}