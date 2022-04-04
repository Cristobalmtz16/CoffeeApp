import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from "../actions/userActions"
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'
export default function Registerscreen() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const registerstate = useSelector(state => state.registerUserReducer)
    const {error, loading, success} = registerstate

    const dispatch = useDispatch()
    function register() {

        if (password != cpassword) {
            alert("Passwords do not match")
        }
        else {
            const user = {
                name,
                email,
                password

            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }


    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
               
                {success && (<Success success='User Registered Successfully!' />)}
                {error && (<Error error='Email already in User' />)}
                    <h2 className='text-center m-3' style={{ fontSize: '35px' }}>Register Your Account</h2>
                    <div>
                        <input type="text"
                            placeholder='Name'
                            className='form-control '
                            value={name}
                            required
                            onChange={(e) => { setName(e.target.value) }} />

                        <input type="text"
                            placeholder='Email Address'
                            className='form-control'
                            value={email}
                            required
                            onChange={(e) => { setEmail(e.target.value) }} />

                        <input
                            type="password"
                            placeholder='Password'
                            className='form-control'
                            value={password}
                            required
                            onChange={(e) => { setPassword(e.target.value) }} />

                        <input type="password"
                            placeholder='Confirm Password'
                            className='form-control'
                            value={cpassword}
                            required
                            onChange={(e) => { setCpassword(e.target.value) }} />


                        < button onClick={register} href="/login" className='btn mt-2 mb-3'>Register</button>
                        <br />
                        <a style={{ color: 'black' }} href="/login" className="mt-2">Click here to Login</a>
                    </div>
                </div>


            </div>

        </div>
    )
}