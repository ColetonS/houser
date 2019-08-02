import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            properties: []
        }
    }

    componentDidMount() {
        axios.get('/api/properties').then(res => {
            this.setState({
                properties: res.data
            })
        })
    }

    render() {

        return (
            <div>
                <h2>Properties</h2>
                {this.state.properties.map(house => {
                    return (
                        <div>
                            <h3>{house.property_name}</h3>
                        </div>
                    )
                })}
                <House />
                <Link to = '/wizard'>
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}