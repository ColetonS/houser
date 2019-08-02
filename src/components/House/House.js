import React, {Component} from 'react'

export default class House extends Component {
    constructor() {
        super()

    }

    render() {
        let {property_name, address, city, state, zip} = this.props
        return (
            <div>
                <h3>{property_name}</h3>
                <h3>{address}</h3>
                <h3>{city}</h3>
                <h3>{state}</h3>
                <h3>{zip}</h3>
            </div>
        )
    }
}