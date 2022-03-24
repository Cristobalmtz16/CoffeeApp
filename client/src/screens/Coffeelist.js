import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePizza, getAllCoffees, getAllPizzas } from "../actions/coffeeActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
export default function Coffeelist() {
  const dispatch = useDispatch();

  const coffeestate = useSelector((state) => state.getAllCoffeeReducer);

  const { coffee, error, loading } = coffeestate;
  useEffect(() => {
    dispatch(getAllCoffees());
  }, []);
  return <div>
    <h2>Drink List</h2>
    {loading && (<Loading/>)}
    {error && (<Error error='Something went wrong'/>)}

    <table  className='table table-bordered table-responsive-sm'>

        <thead className='thead-dark'>
            <tr>
                <th>Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {coffee && coffee.map(pizza=>{

            return <tr>
                <td>{coffee.name}</td>
                <td>

                   Small : {coffee.prices[0]['small']} <br/>
                   Medium : {coffee.prices[0]['medium']} <br/>
                   Large : {coffee.prices[0]['large']}
                    
                </td>
                <td>{coffee.category}</td>
                <td>
                    <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteCoffee(coffee._id))}}></i>
                    <Link to={`/admin/editpizza/${coffee._id}`}><i className='fa fa-edit m-1'></i></Link>
                </td>

            </tr>

        })}
        </tbody>

    </table>

   
  </div>;
}
