import {createStore} from 'redux'

const initialState = {
    propertyName: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

export const STEP_ONE = 'STEP_ONE'
export const STEP_TWO = 'STEP_TWO'
export const STEP_THREE = 'STEP_THREE'
export const CANCEL = 'CANCEL'

function reducer(state=initialState, action) {
    const {type, payload} = action
    switch(type) {
        case STEP_ONE:
            return {...state, ...payload}
        case STEP_TWO: 
            return {...state, ...payload}
        case STEP_THREE:
            return {...state, ...payload}
        case CANCEL:
            return {initialState}
        default: return state
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())