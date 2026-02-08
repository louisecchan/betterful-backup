import React from "react";
import "./underConstruction.scss";

const UnderConstruction = () => {
  return (
    <div className="coming-soon">
      {" "}
      <div className="coming-soon-container">
        <h1 className="loginCard-title coming-soon-text fade-in">
          Don't miss a sale—<span className="sign-up-link">sign up now</span>
        </h1>
        {console.log(process.env.REACT_APP_API_TOKEN)}
      </div>
    </div>
  );
};

export default UnderConstruction;
