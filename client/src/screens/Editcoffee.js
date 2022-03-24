import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCoffee, getCoffeeById } from "../actions/coffeeActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function Editpizza({ match }) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getcoffeebyidstate = useSelector((state) => state.getCoffeeByIdReducer);

  const { coffee, error, loading } = getcoffeebyidstate;

  const editcoffeestate = useSelector((state) => state.editCoffeeReducer)
  const {editloading , editerror , editsuccess} = editcoffeestate;

  useEffect(() => {

    if(coffee)
    {
        if(coffee._id==match.params.coffeeid)
        {
            setname(coffee.name)
            setdescription(coffee.description)
            setcategory(coffee.category)
            setsmallprice(coffee.prices[0]['small'])
            setmediumprice(coffee.prices[0]['medium'])
            setlargeprice(coffee.prices[0]['large'])
            setimage(coffee.image)
        }
        else{
            dispatch(getCoffeeById(match.params.coffeeid));
        }
        
    }
    else{
        dispatch(getCoffeeById(match.params.coffeeid));
    }



  }, [coffee , dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedcoffee = {
      _id : match.params.coffeeid,
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };

    dispatch(editCoffee(editedcoffee))
  }

  return (
    <div>
    
     

      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Edit Drink</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (<Success success='Drink details edited successfully'/>)}
        {editloading && (<Loading />)}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
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
            placeholder="small size price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium size price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large size price"
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
          <button className="btn mt-3" type="submit">
            Edit Drink
          </button>
        </form>
      </div>
    </div>
  );
}
