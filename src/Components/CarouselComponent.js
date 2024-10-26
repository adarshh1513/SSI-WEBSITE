// CarouselComponent.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Center align the slides
    centerPadding: '0', // Remove padding for center alignment
  };

  const h2Style = {
    textAlign: 'center', // Center align the text
    fontFamily: 'Arial, sans-serif', // Change the font family
    fontSize: 'clamp(2rem, 5vw, 4rem)', // Dynamic font size
    fontWeight: 'bold', // Change the font weight if needed
    color: '#4c4c4c', // Change the font color
    maxWidth: '600px', // Set maximum width
    paddingTop: '20px', // Add padding to the top
    paddingBottom: '20px', // Add padding to the bottom
    margin: '0 auto', // Center horizontally
  };

  return (
    <div>
      <h2 style={h2Style}>Our Customers</h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://placekitten.com/400/200"
            alt="Slide 1"
            style={{ width: '30%', height: 'auto', margin: '0 auto' }}
          />
        </div>
        <div>
          <img
            src="https://placekitten.com/400/201"
            alt="Slide 2"
            style={{ width: '30%', height: 'auto', margin: '0 auto' }}
          />
        </div>
        <div>
          <img
            src="https://placekitten.com/400/202"
            alt="Slide 3"
            style={{ width: '30%', height: 'auto', margin: '0 auto' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
