import React, {Component} from 'react'

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
            </div>
        )
    }
}