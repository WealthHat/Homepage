import React from "react";
import Slider from "react-slick";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const CardSlider = ({ children }: Props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           infinite: true,
        },
      },
    ],
  };

  return (
      <Slider {...settings}>{children}</Slider>
  );
};

export default CardSlider;
