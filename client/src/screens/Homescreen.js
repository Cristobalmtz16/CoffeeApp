import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoffees } from "../actions/coffeeActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Coffee from "../components/Coffee";
export default function Homescreen() {
  const dispatch = useDispatch();

  const coffeestate = useSelector((state) => state.getAllCoffeeReducer);

  const { coffee, error, loading } = coffeestate;

  useEffect(() => {
    dispatch(getAllCoffees());
  }, []);

  return (
    <div>
 <Filter/>
      <div className="row justify-content-center">
       
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error error='Something went wrong'/>
        ) : (
          coffee.map((coffee) => {
            return (
              <div className="col-md-3 m-3" key={coffee._id}>
                <div>
                  <Coffee coffee={coffee} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
