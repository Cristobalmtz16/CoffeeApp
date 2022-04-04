import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Landingscreen from "./screens/Landingscreen";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Landingscreen />} exact />
        <Route path="/shop" element={<Homescreen />} exact />
        <Route path="/cart" element={<Cartscreen />} exact />
      </Routes>
    </div>
  );
}

export default App;
