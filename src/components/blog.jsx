import React, { Component, Fragment } from 'react';
import './style.css';



class blog  extends Component{
    constructor() {
        super();
        this.state = {
            customers : []
        }
    }
    componentDidMount(){
        fetch('/customers')
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log('customers fetched..' , customers)));
    }
    render(){
        return(
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customer =>
                      <li key={customer.id}>{customer.firstName} {customer.lastName}</li>  )}
                </ul>
            </div>
        )
    }
}

export default blog;