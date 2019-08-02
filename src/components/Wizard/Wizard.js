import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
    constructor() {
        super()
        
        this.state = {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addProperty = () => {
        axios.post('/api/properties', {
            propertyName: this.state.propertyName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        })
    }

    render() {
        return (
            <div>
                <h1>Wizard</h1>
                <h2>Property Name</h2>
                <input onChange={e => this.handleChange(e)} type='text' name='propertyName'/>
                <h2>Address</h2>
                <input type='text' onChange={e => this.handleChange(e)} name='address'/>
                <h2>City</h2>
                <input type='text' onChange={e => this.handleChange(e)} name='city'/>
                <h2>State</h2>
                <input type='text' onChange={e => this.handleChange(e)} name='state'/>
                <h2>Zip</h2>
                <input type='number' onChange={e => this.handleChange(e)} name='zip'/>
                <br />
                <br />
                <button onClick={this.addProperty}>Complete</button>
                <br />
                <br />
                <Link to='/'><button>Return to Dashboard</button></Link>
            </div>
        )
    }
}