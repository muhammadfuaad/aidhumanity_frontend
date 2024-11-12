import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Appeal_card from "./generic/components/appeal_card";
import { useNavigate } from "react-router-dom";

function General_slick({ card, number_of_elements, appeals, fetchAppeals }) {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: number_of_elements,
    slidesToScroll: number_of_elements,
    showThumbs: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          className: "myCustomCarousel",
        },
      },
    ],
  };
  return (
    <div className="slick appeals relative">
      <button
        className="hidden sm:flex absolute sm:-bottom-10 sm:right-0 px-10 py-6 text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
        outline-spanish-gray rounded-xl self-center sm:self-auto cursor-pointer"
        onClick={() => navigate("/appeals")}
      >
        View All
      </button>
      <Slider {...settings}>
        {appeals.map((item) => {
          return (
            <div className="appeal-card">
              <Appeal_card appeal={item} fetchAppeals={fetchAppeals} />
            </div>
          ) 
          
        })}
      </Slider>
    </div>
  );
}
export default General_slick;
