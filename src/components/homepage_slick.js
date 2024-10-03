import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homepage_hero_slider from "./homepage/components/homepage_hero_slider";
import Hero_card from "./homepage/components/hero_card";

function Homepage_slick({appeals}) {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    showThumbs: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [    
      {
        breakpoint: 640,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          className: "myCustomCarousel",
        }
      }
    ]
  };
  return (
    <div className="slick homepage relative">
      <div className="hidden sm:flex gap-10 absolute bottom-28 right-40 z-10">
        {/* <Hero_card title="Pakistan Floods"/>
        <Hero_card title="Support an orphan child"/> */}
      </div>
      <Slider {...settings}>
        {appeals.map((appeal)=> {
          const {title, description, campaign} = appeal
          return (
            <div>
              <Homepage_hero_slider
                title={title}
                content={description}
                category={campaign}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <span className="icon-arrow-left"></span>
    </div>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <div className="bg-white rounded-r-full px-4 py-2">
        <img src="./icons/arrow-left-gray.svg"></img>
      </div>
    </div>
    
  );
}

export default Homepage_slick;