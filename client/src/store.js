import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import{composeWithDevTools} from 'redux-devtools-extension'
import { getAllCoffeesReducer } from './reducers/coffeeReducer'
import { cartReducer } from './reducers/cartReducer'
import { loginUserReducer, registerUserReducer } from './reducers/userReducer'
import { placeOrderReducer } from './reducers/orderReducer'

const finalReducer = combineReducers({
    getAllCoffeesReducer : getAllCoffeesReducer,
    cartReducer : cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer

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
