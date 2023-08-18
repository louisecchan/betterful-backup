import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`../product/${item.id}`} className="normal-text">
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>NEW IN</span>}
          <img
            src={
              // process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              // process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div>
          <h3 className="price-original-text">${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
