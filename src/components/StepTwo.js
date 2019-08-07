import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {STEP_TWO} from '../store'


export default class StepTwo extends Component {
    constructor() {
        let reduxState = store.getState()
        super()

        this.state = {
            img: reduxState.img
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () => {
        store.dispatch({
            type: STEP_TWO,
            payload: this.state
        })
    }

    render() {
        return (
            <div>
                <h2>Image URL</h2>
                <input type='text' onChange={e => this.handleChange(e)} name='img'/>
                <br />
                <br />
                <Link to ='/wizard/step3'>
                    <button onClick={this.submit}>Next Step</button>
                </Link>
            </div>
        )
    }
}