import React from "react";
import "./underConstruction.scss";

const UnderConstruction = () => {
  return (
    <div className="coming-soon">
      {" "}
      <div className="coming-soon-container">
        <h1 className="loginCard-title coming-soon-text fade-in">
          coming soon.
        </h1>
        {console.log(process.env.REACT_APP_API_TOKEN)}
      </div>
    </div>
  );
};

export default UnderConstruction;
