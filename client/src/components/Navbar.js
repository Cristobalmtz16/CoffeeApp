import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';

export default function Navbar() {
  const cartstate = useSelector(state => state.cartReducer)
  const userstate = useSelector(state => state.loginUserReducer)
  const { currentUser } = userstate
  const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Coffee Shop</a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

            {currentUser ? (<div className="dropdown mt-2">
              <a className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {currentUser.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Orders</a>
                <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
              </div>
            </div>) : (
              <li className="nav-item active">
                <a className="nav-link" href="/login">Login</a>
              </li>)}



            <li className="nav-item">
              <a className="nav-link mt-2" href="/cart">Cart {cartstate.cartItems.length} </a>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  )
}