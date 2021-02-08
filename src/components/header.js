import React from "react";
// import Logo from "../static/logonew.png";
export default function Header() {
  return (
    <div className="myHeader">
     <p style={{marginLeft:"0.5rem",marginTop:"1rem",fontWeight:"600", fontSize:"1.3rem"}}>Synchrophasor Anomaly/Event Detection and Classification </p>
      <button className="userSettings"
        onClick={() => alert("Settings")}
      >
        User Settings
      </button>
    </div>
  );
}
