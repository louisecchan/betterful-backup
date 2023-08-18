import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681216747/category-sale_suljcy.png"
            alt="Sale"
          />
          <Link className="link-2" to="/underconstruction">
            <button className="categories-btn">Sale</button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681219442/category-skincare_jvlwi5.png"
            alt="Beauty"
          />

          <Link className="link-2" to="/products/1">
            <button className="categories-btn">Beauty</button>
          </Link>
        </div>
      </div>
      {/* </div> */}
      <div className="col">
        <div className="row" id="fashion">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1685310272/Category_Fashion_nsbxvw.jpg"
            alt="Fashion"
          />{" "}
          <Link className="link-2" to="/products/2">
            <button className="categories-btn">Fashion</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1685309560/Category_Supplements_a74rjd.png"
                alt=""
              />
              <Link className="link-2" to="/underconstruction">
                <button className="categories-btn">Supplements</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681223160/category-aromatherapy_i5ylrx.png"
                alt=""
              />
              <Link className="link-2" to="/underconstruction">
                <button className="categories-btn">Aromatherapy</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row" id="yoga">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681224387/category-yoga-accessories_imimxf.png"
            alt=""
          />

          <Link className="link-2" to="/underconstruction">
            <button className="categories-btn">Yoga Accessories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
