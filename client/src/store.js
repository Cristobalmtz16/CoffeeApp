import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import{composeWithDevTools} from 'redux-devtools-extension'
import { getAllCoffeesReducer } from './reducers/coffeeReducer'
import { cartReducer } from './reducers/cartReducer'

const finalReducer = combineReducers({
    getAllCoffeesReducer : getAllCoffeesReducer,
    cartReducer : cartReducer,

})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initalState = {
    cartReducer : {
        cartItems : cartItems
    }

}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initalState, composeEnhancers(applyMiddleware(thunk)))


export default store
