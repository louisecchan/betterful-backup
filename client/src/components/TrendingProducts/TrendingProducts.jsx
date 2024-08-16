import React from "react";
import Card from "../Card/Card";
import "./trendingProducts.scss";
import useFetch from "../../hooks/useFetch";

const TrendingProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `https://strapi-production-a8c7.up.railway.app/api/products?populate=*&[filters][type][$eq]=${type}`
  );

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p id="trending-desc">
          Welcome to the new world order. Gone are the days of cut-and-dried
          trend forecasting; the bell curve no longer rings true. Before the
          internet became indelible in our lives, forecasting agencies would
          seek out whispers in counterculture, then sell the trends to
          corporations that would shower them upon the masses. The 20-year cycle
          is no longer king either. Social media democratized, and scrambled,
          all of it.
        </p>
      </div>
      <div className="bottom">
        {error ? (
          <span className="errMessage">Sorry, our server is down at the moment.</span>
        ) : loading ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          data?.map((item) => (
            <div className="card-container">
              <Card item={item} key={item.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrendingProducts;
