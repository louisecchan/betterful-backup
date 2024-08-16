import React from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
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
        <p>
          We think of ourselves as a hands-on curator. For us make is integral
          to our design philosophy. Inspired by the authenticity we can find in
          nature, people and places, and we think it is the same quality we look
          for in the products we choose. We like to work with brands who
          understand and share this passion for make and quality, and good
          design that is about living with thoughtful style.
        </p>
      </div>
      <div className="bottom">
        {error ? (
          <span className="errMessage">Uh oh, shit went wrong.</span>
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

export default FeaturedProducts;
