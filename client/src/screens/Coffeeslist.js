import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { getAllCoffees, deleteCoffee } from '../actions/coffeeActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'
import "./Coffeelist.css"



export default function Coffeeslist() {
    const dispatch = useDispatch()

    const coffeesstate = useSelector(state => state.getAllCoffeesReducer)
    const { coffees, error, loading } = coffeesstate
    useEffect(() => {
        dispatch(getAllCoffees())
    }, [])

    return (

        <div>
            <h2>Coffee List </h2>
            {loading && (<Loading />)}
            {error && (<Error error='Something Went Wrong' />)}

            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {coffees && coffees.map(coffee => {

                        return <tr>
                            <td><b>{coffee.name}</b></td>
                            <td><b>
                                Small : $ {coffee.prices[0]['small']} <br />
                                Medium : $ {coffee.prices[0]['medium']} <br />
                                Large : $ {coffee.prices[0]['large']}

                            </b></td>
                            <td><b>{coffee.category}</b></td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={() => { dispatch(deleteCoffee(coffee._id)) }}></i>
                               
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>


        </div>
    )
}