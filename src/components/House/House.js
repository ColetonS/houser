import React, {Component} from 'react'

export default class House extends Component {
    constructor() {
        super()

    }

    render() {
        let {property_name, address, city, state, zip, img, mortgage, rent, id} = this.props
        return (
            <div>
                <h3>{property_name}</h3>
                <h3>{address}</h3>
                <h3>{city}</h3>
                <h3>{state}</h3>
                <h3>{zip}</h3>
                <img src={img} alt='house'/>
                <h3>mortgage: {mortgage}</h3>
                <h3>rent: {rent}</h3>
                <button onClick={() => {
                    this.props.deleteProperty(this.props.id)}}>Delete</button>
            </div>
        )
    }
}