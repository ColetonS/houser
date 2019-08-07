import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store, {STEP_THREE, CANCEL} from '../store'


export default class StepThree extends Component {
    constructor() {
        let reduxState = store.getState()
        super()

        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   

    submit = async () => {
        store.dispatch({
            type: STEP_THREE,
            payload: this.state
        })
        let reduxState = store.getState()
       await axios.post('/api/properties', reduxState).catch(err => alert(err))
        store.dispatch({
            type: CANCEL
        })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Monthly Mortage Amount</h2>
                <input type='number' onChange={e => this.handleChange(e)} name='mortgage'/>
                <h2>Desired Monthly Rent</h2>
                <input type='number' onChange={e => this.handleChange(e)} name='rent'/>
                <br />
                <br />
                {/* <Link to ='/'> */}
                <button onClick={this.submit}>Complete</button>
                {/* </Link> */}
            </div>
        )
    }
}