import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {STEP_ONE} from '../store'


export default class StepOne extends Component {
    constructor() {
        let reduxState = store.getState()

        super()

        this.state = {
            propertyName: reduxState.propertyName,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () => {
        store.dispatch({
            type: STEP_ONE,
            payload: this.state
        })
    }

    render() {
        return (
            <div>
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
                <Link to ='/wizard/step2'>
                    <button onClick={this.submit}>Next Step</button>
                </Link>
            </div>
        )
    }
}