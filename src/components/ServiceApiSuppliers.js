import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';

export default class ServiceApiSuppliers extends Component {
    cajaNumber = React.createRef();

    state = {
        suppliers: [],
        selectedSupplier: null
    }

    url = Global.urlNorthwind

    loadSuppliers =  () => {
        let request = "Suppliers"
        console.log("Antes del servicio")
        axios.get(this.url + request).then(response => {
            console.log("Leyendo servicio")
            console.log(response.data.value)
            this.setState({
                suppliers: response.data.value
            })

        })
        
        console.log("Después del servicio")
    }

    loadOneSupplier = (event) => {
        event.preventDefault();
        let supplierInfo = parseInt(this.cajaNumber.current.value)
        let selected = null;
        for (let i = 0; i < this.state.suppliers.length; i++) {
            var s = this.state.suppliers[i];
            if (s.SupplierID == supplierInfo) {
                selected = s;
            }
        }
        this.setState({ selectedSupplier: selected });
    }

    // findSupplierId = () => {
    //     event.preventDefault()
            // let idSupplier = parseInt(this.cajaNumber.current.value)
    //     Realizamos la peticion de nuevo a todos los proveedores
            // axios.get(this.url).then(response => {
            //     for (var supplier of response.data.value) {
                        // if (supplier.SupplierID == idSupplier){
                        //      this.setState({
                        //      supplier: supplier
                        //   })
                        // break;                          
                        // }
            //     }
            // })
    // }

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
                    return (<li key={index}>{supplier.SupplierID} - {supplier.ContactName}</li>)
            })
            }
        </ul>
        <hr/>
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
