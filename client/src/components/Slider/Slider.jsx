import React, { useState, useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681138564/slider-photo-3_huuszj.jpg",
    "https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681136413/slider-photo-1_hbwhrj.jpg",
    "https://res.cloudinary.com/dlmgs0z2s/image/upload/v1682610428/slider-v-2_uwdmqi.jpg",
    "https://res.cloudinary.com/dlmgs0z2s/image/upload/v1682610428/slider-v-1_un6du6.jpg",
  ];

  useEffect(() => {
    const changeSlide = setInterval(
      () => setCurrentSlide((prevSlide) => 1 - prevSlide),
      3500
    ); // change your switch time here.
    return () => clearInterval(changeSlide);
  }, []);

  return (
    <div className="slider">
      <div
        className="container-1"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
      </div>
      <div
        className="container-2"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
    </div>
  );
};

export default Slider;
