import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCoffee } from '../actions/coffeeActions';
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'

export default function Addcoffee() {
    const [name, setname] = useState("");
    const [smallprice, setsmallprice] = useState();
    const [mediumprice, setmediumprice] = useState();
    const [largeprice, setlargeprice] = useState();
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");
    const dispatch = useDispatch()

    const addcoffeestate = useSelector(state => state.addCoffeeReducer)
    const { success, error, loading } = addcoffeestate
    function formHandler(e) {

        e.preventDefault();

        const coffee = {
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }

        console.log(coffee);
        dispatch(addCoffee(coffee))


    }

    return (
        <div>

            <div className='text-left'>
                <h1><b>Add Coffee</b></h1>

                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {success && (<Success success='New Coffee added successfully' />)}

                <form onSubmit={formHandler}>
                    <input className="form-control"
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => {
                            setname(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="small price"
                        value={smallprice}
                        onChange={(e) => {
                            setsmallprice(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="medium price"
                        value={mediumprice}
                        onChange={(e) => {
                            setmediumprice(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="large price"
                        value={largeprice}
                        onChange={(e) => {
                            setlargeprice(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="category"
                        value={category}
                        onChange={(e) => {
                            setcategory(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="description"
                        value={description}
                        onChange={(e) => {
                            setdescription(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="image url"
                        value={image}
                        onChange={(e) => {
                            setimage(e.target.value);
                        }}
                    />
                    <button className='btn mt-3' type='submit'>Add Product</button>
                </form>
            </div>
        </div>
    )

}