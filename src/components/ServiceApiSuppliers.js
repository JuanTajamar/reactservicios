import React, { Component } from 'react'
import axios from 'axios'

export default class ServiceApiSuppliers extends Component {
    cajaNumber = React.createRef();

    state = {
        suppliers: [],
        selectedSupplier: null
    }

    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"

    loadSuppliers =  () => {
        console.log("Antes del servicio")
        axios.get(this.url).then(request => {
            console.log("Leyendo servicio")
            console.log(request.data.value)
            this.setState({
                suppliers: request.data.value
            })

        })
        
        console.log("Después del servicio")
    }

    loadOneSupplier = (event) => {
        event.preventDefault();
        let supplierInfo = parseInt(this.cajaNumber.current.value)
        let selected = null;
        for (let i = 0; i < this.state.suppliers.length; i++) {
            const s = this.state.suppliers[i];
            if (s.SupplierID === supplierInfo) {
                selected = s;
            }
        }
        this.setState({ selectedSupplier: selected });
    }

    componentDidMount = () => {
        this.loadSuppliers();
    }

  render() {
    return (
      <div>
        <h1>Service Api Suppliers</h1>
        <ul>
            {
                this.state.suppliers.map((supplier, index) => {
                    return (<li key={index} style={{color:"blue"}}>{supplier.SupplierID}: {supplier.ContactName}</li>)
            })
            }
        </ul>

        <form onSubmit={this.loadOneSupplier}>
            <label>Supplier especifico</label>
            <input type='number' ref={this.cajaNumber}/>
             <button>Buscar supplier</button>
            {
                this.state.selectedSupplier && (
                    <div>
                        <h2>{this.state.selectedSupplier.CompanyName}</h2>
                        <p>{this.state.selectedSupplier.ContactTitle}</p>
                    </div>
                )
            }
           
        </form>
      </div>
    )
  }
}
