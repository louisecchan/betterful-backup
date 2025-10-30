import React from "react";
import "./stores.scss";

const Stores = () => {
  const stores = [
    {
      address: "147 Shoreditch High St",
      city: "London E1 6JE",
      phone: "+44 (0) 20 3848 8860",
    },
    {
      address: "116 Regent's Park Rd",
      city: "London NW1 8UR",
      phone: "+44 (0) 20 7253 1644",
    },
    {
      address: "52 Rochester Walk",
      city: "London SE1 9AF",
      phone: "+44 (0) 20 8617 8760",
    },
  ];

  return (
    <div className="containerStore fade-in">
      {stores.map((store, index) => (
        <div key={index} className="shop">
          <p className="address">{store.address}</p>
          <p className="city">{store.city}</p>
          <p className="phone">{store.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Stores;
