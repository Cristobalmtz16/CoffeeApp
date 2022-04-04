import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import "./Navbar.js";
import logoUrl from "./brandLogo.svg";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
const Header = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <div className="header">
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="hamburger"
        >
          {drawerOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu
              style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
            />
          )}
        </button>
        <ul className={`hamburgerNavIcon ${drawerOpen ? "showMenu" : ""}`}>
          <li>
            <NavLink to="/aboutus" onClick={() => setDrawerOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" onClick={() => setDrawerOpen(false)}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="#info" onClick={() => setDrawerOpen(false)}>
              Sign in
            </NavLink>
          </li>
        </ul>
        <img src={logoUrl} alt="Company logo" />
        <ul className="navIcon">
          <li>
            <a href="#my-portfolio">About Us</a>
          </li>
          <li>
            <a href="#my-skills">Menu</a>
          </li>
          <li>
            <a href="#info">Sign in</a>
          </li>
          <li>
            <a href="/cart">
              Cart {cartstate.cartItems.length}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
