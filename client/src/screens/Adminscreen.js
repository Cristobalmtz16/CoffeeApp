import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import Addcoffee from "./Addcoffee";
import Orderslist from "./Orderslist";
import Coffeeslist from "./Coffeeslist";
import Userslist from "./Userslist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
    <div className="row justify-content-center p-3">
      <div className="col-md-10">
        <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

        <ul className="adminfunctions">
          <li>
            <Link to={'/admin/userslist'} style={{color: 'white'}}>Users List</Link>
          </li>
          <li>
          <Link to={'/admin/coffeeslist/'} style={{color: 'white'}}>Coffee List</Link>
          </li>
          <li>
          <Link to={'/admin/addcoffee'} style={{color: 'white'}}>Add Coffee</Link>
          </li>
          <li>
          <Link to={'/admin/orderslist'} style={{color: 'white'}}>Orders List</Link>
          </li>          
        </ul>

          <Routes>
              <Route path="/admin/" element={<Adminscreen />} exact/>
              <Route path="/admin/userslist" element={<Userslist />} exact/>
              <Route path="/admin/orderslist" element={<Orderslist />} exact/>
              <Route path="/admin/coffeeslist" element={<Coffeeslist/>} exact/>
              <Route path="/admin/addcoffee" element={<Addcoffee />} exact/>
          </Routes>
        </div>
      </div>
    </div>
  );
}