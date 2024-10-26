import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TATA from "../Assets/TATA.PNG";
import TIMKEN from "../Assets/TIMKEN.PNG";
import NML from "../Assets/NML.PNG";
import CUMMINS from "../Assets/CUMMINS.PNG";
//import SlideImage2 from '../path-to-your-assets/SlideImage2.jpg';
//import SlideImage3 from '../path-to-your-assets/SlideImage3.jpg';

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      imgSrc: TATA,
      altText: 'TATA',
      text: 'LD#1,TATA Steel',
      bullets: ['Flat Product .(Level2 System)',  'ASP.Net, C#, Oracle, OCP, DDE, etc'],
    },
    {
      imgSrc: CUMMINS,
      altText: 'CUMMINS',
      text: 'Cummins India',
      bullets: ['High Level Project'],
    },
    {
      imgSrc: TATA,
      altText: 'TATA',
      text: 'Automation Division,TATA Steel',
      bullets: [' Long Product .(Level2 System)', ' ASP.Net, C#, Oracle, OCP, DDE, etc'],
    },
    {
      imgSrc: TIMKEN,
      altText: 'TIMKEN',
      text: 'Purchase, Timken India Ltd.',
      bullets: ['Materials Management System','Developer 2000 with Oracle'],
    },
    {
      imgSrc: TATA,
      altText: 'TATA',
      text: 'MD Office, Tata Steel',
      bullets: ['Project Work',  'Foxpro'],
    },
    {
      imgSrc: NML,
      altText: 'NML',
      text: 'National Metallurgical Laboratory',
      bullets: ['Metal Soft',  'Visual Basic with MS-Access'],
    },
    {
      imgSrc: TIMKEN,
      altText: 'TIMKEN',
      text: 'ITS, Timken India Ltd',
      bullets: ['Distributed Management System','DHTML with Visual Basic'],
    },
  ];

  const h2Style = {
    textAlign: 'center',
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#fe9e0d',
    marginBottom: '50px',
    marginTop: '20%',
  };

  const containerStyle = {
    marginTop: '20%',
  };

  return (
    <div style={containerStyle}>
      <h2 style={h2Style}>
        Our Customers
      </h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <img
              src={slide.imgSrc}
              alt={slide.altText}
              style={{
                width: '80%',
                height: 'auto',
                margin: '0 auto',
                borderRadius: '15px',
                overflow: 'hidden',
              }}
            />
            <p style={{ textAlign: 'center', fontSize: '18px', color: '#333', marginTop: '10px' }}>
              {slide.text}
            </p>
            <ul style={{ textAlign: 'center', marginTop: '10px', padding: 0, listStyle: 'none' }}>
              {slide.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
