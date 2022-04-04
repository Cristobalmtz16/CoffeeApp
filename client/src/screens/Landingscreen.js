import React from "react";
import lobbyPic from "./coffeeLobby2.jpg";
import "./Landingscreen.css";

const Landingscreen = () => {
  return (
    <div style={{ minWidth: "100vw" }}>
      <div id="heroContainer">
        <img className="lobbyImg" src={lobbyPic} alt="Company logo" />
      </div>
      <div className="footer ">
     
        
        <img src="instagramLogo.png" className="instagramLink" to="https://instagram.com/three_bayous_beanery" />
      
      </div>
    </div>
  );
};

export default Landingscreen;
