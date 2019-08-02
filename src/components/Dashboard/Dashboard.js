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

    deleteProperty = (id) => {
        axios
            .delete(`/api/properties/${id}`)
            .then(res => {
                this.setState({
                    properties: res.data
                })
            })
            .catch(() => {
                alert('failed to delete')
            })
    }

    render() {

        return (
            <div>
                <h2>Properties</h2>
                {this.state.properties.map(house => {
                    return (
                        <div>
                            <House
                               property_name={house.property_name}
                               address={house.address}
                               city={house.city}
                               state={house.state}
                               zip={house.zip}
                               key={house.id}
                               id={house.id}
                               deleteProperty={this.deleteProperty}
                               />
                        </div>
                    )
                })}
                <Link to = '/wizard'>
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}