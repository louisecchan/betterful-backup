import React from "react";
import Slider from "../../components/Slider/Slider";
import "./home.scss";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <TrendingProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
