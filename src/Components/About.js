import React, { useEffect, useState } from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/newoffice1.jpg";
import AboutBackground2 from "../Assets/about-background-removebg-preview.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

//import './About.css'; // Make sure to import your stylesheet

const About = () => {
  const [animate, setAnimate] = useState(false);

  const handleImageClick = () => {
    setAnimate(!animate); // Toggle the animation state on click
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust the scroll threshold as needed
      if (scrollY > 100) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about-section-container ${animate ? 'animate' : ''}`}>
      <div className="about-background-image-container" onClick={handleImageClick}>
        <img src={AboutBackground} alt=""/>
      </div>
      {/* This div element is added by me */}
      <div className="about-background-image-container2">
        <img src={AboutBackground2} alt=""/>
      </div>
      <div className="about-section-image-container">
        <img className={`rotate ${animate ? 'rotate-animation' : ''}`} src={AboutBackgroundImage} alt=""/>
      </div>
      <div className="about-section-text-container">
        <p className="primary-text">
          Since the time it was founded, the company has been involved in releasing
          numerous projects for diverse business spheres ranging from basic
          automation to highly sophisticated business automation systems, IT
          Infrastructure solutions, and other solutions. Our proficiency in a wide
          range of modern computer technologies ensures that the solutions we
          develop provide is perfectly suited to our clients' needs.
        </p>
        <p className="primary-text">
          We have extensive experience in many diverse areas of both software and
          hardware development. Our experienced staff of professionals has
          worked with a wide array of platforms, languages, and tools in the course
          of our various projects.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>
        </div>
      </div>
    </div>
  );
};

export default About;

