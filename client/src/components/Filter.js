import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterCoffee} from "../actions/coffeeActions"
export default function Filter() {
    const dispatch = useDispatch()
    const[searchkey , setsearchkey] = useState('')
    const[category , setcategory] = useState('all')
    return (
        <div className='container'>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">

                    <div className="col-md-3 w-100">
                      <input
                      onChange={(e)=>{setsearchkey(e.target.value)}}
                      value={searchkey} type="text" className="form-control w-100" placeholder="search Drinks"/>
                    </div>
                    <div className="col-md-3 w-100">
                        <select className="form-control w-100 mt-2" value={category} onChange={(e)=>setcategory(e.target.value)}>
                            <option value="all">All</option>
                            <option value="veg">Coffee</option>
                            <option value="nonveg">Tea</option>
                        </select>
                    </div>
                    <div className="col-md-3 w-100">
                       <button className='btn w-100 mt-2' onClick={()=>{dispatch(filterCoffee(searchkey , category))}}>FILTER</button>
                    </div>

            </div>
        </div>
    )
}
