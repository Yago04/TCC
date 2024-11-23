import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import Imagem1 from "../../assets/img/img_carousel_1.png";
import Imagem2 from "../../assets/img/img_carousel_2.jpg";
import Imagem3 from "../../assets/img/img_carousel_5.jpg";
import Imagem4 from "../../assets/img/img_carousel_4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img src={Imagem1} alt="Slide 1" />
        </div>
        <div>
          <img src={Imagem2} alt="Slide 2" />
        </div>
        <div>
          <img src={Imagem3} alt="Slide 3" />
        </div>
        <div>
          <img src={Imagem4} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent:"center" , background: "rgba(0, 0, 0, 0.5)", border: "2px solid orange", borderRadius: "50%", right: 0, width: "60px", height: "60px"}}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent:"center" ,background: "rgba(215,165,0,0)", border: "2px solid orange", borderRadius: "50%", left: 0,  width: "60px", height: "60px" }}
      onClick={onClick}
    />
  );
}

export default Carousel;

