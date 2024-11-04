import React from "react";
import Slider from "react-slick";
import './CarouselComidas.css'
import comidasArray from "../CardsComidas/ComidasMocks";
import CardsComidas from "../CardsComidas/CardsComidas";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {comidasArray.map((comidas) => (
          <CardsComidas key={comidas.id} {...comidas} />
        ))}
      </Slider>
    </div>



  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.5)", 
        border: "2px solid orange", 
        borderRadius: "50%", 
        right: "10px", // Diminui a distância do lado direito
        zIndex: 1, // Garante que a seta fique acima do conteúdo
        width: "50px", 
        height: "50px" 
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.5)", 
        border: "2px solid orange", 
        borderRadius: "50%", 
        left: "10px", // Diminui a distância do lado esquerdo
        zIndex: 1, // Garante que a seta fique acima do conteúdo
        width: "50px", 
        height: "50px" 
      }}
      onClick={onClick}
    />
  );
}

export default Responsive;
