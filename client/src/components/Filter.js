import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCoffees } from "../actions/coffeeActions";
export default function Filter() {
    const dispatch = useDispatch()
    const[searchkey , setsearchkey] = useState('')
    const[category , setcategory] = useState('all')
    return (
        <div className='container'>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">

                    <div className=" form- control col-md-3 w-20">
                      <input
                      onChange={(e)=>{setsearchkey(e.target.value)}}
                      value={searchkey} type="text" className="form-control w-20" placeholder="Search Drinks"/>
                    </div>
                    <div className="col-md-3 w-20">
                        <select className="form-control  mt-2"  value={category} onChange={(e)=>setcategory(e.target.value)}>
                            <option value="all">All</option>
                            <option value="coffee">coffee</option>
                            <option value="tea">tea</option>
                        </select>
                    </div>
                    <div className="col-md-3 w-20">
                       <button className='btn w-20 mt-2' onClick={()=>{dispatch(filterCoffees(searchkey , category))}}>Search</button>
                    </div>

            </div>
        </div>
    )
}