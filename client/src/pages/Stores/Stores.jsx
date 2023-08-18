import React from "react";
import "./stores.scss";

const Stores = () => {
  return (
    <div className="containerStore fade-in">
      <span></span>
      <div className="shop">
        147 Shoreditch High St,
        <br />
        London E1 6JE
        <br />
        <span>+44 (0) 20 3848 8860</span>
        <br />
      </div>
      <div className="shop">
        116 Regent's Park Rd,
        <br />
        London NW1 8UR
        <br />
        <span> +44 (0) 20 7253 1644</span>
        <br />
      </div>
      <div className="shop">
        52 Rochester Walk
        <br />
        London SE1 9AF
        <br />
        <span> +44 (0) 20 8617 8760</span>
        <br />
      </div>
      <span></span>
    </div>
  );
};

export default Stores;
