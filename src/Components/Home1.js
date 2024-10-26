import React, { useEffect, useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Office from "../Assets/office3.jpg";

const Home = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    });

    // Target elements with the 'animate' class
    const elementsToAnimate = document.querySelectorAll(".animate");
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    // Clean up the observer on component unmount
    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleTextClick = () => {
    setShowFullContent(!showFullContent);
  };

  const handleOrderNowClick = () => {
    setShowFullContent(true);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className={`home-bannerImage-container animate ${showFullContent ? 'fade-out' : ''}`}>
          <img src={BannerBackground} alt="" className="banner-background" />
        </div>
        <div className={`home-text-section animate ${showFullContent ? 'fade-in' : ''}`}>
          <h1 className="primary-heading">
            About Us
          </h1>
          <p className="primary-text" onClick={handleTextClick}>
            {showFullContent
              ? "Special Software (India) Pvt. Ltd., well known as SSI is a turnkey software and business solution provider. Established in xxxxxxx to steer customers through the next generation of business innovation powered by technology with state-of-the-art business automation, software development and consultation services. We help our clients with the selection, installation and maintenance of their complete IT Infrastructure that runs their business. SSI specialized in the Steel Plant business industry providing automation and solutions.For companies operating in the information age we help to leverage new technologies to competitive advantage. We deliver high value innovated solutions by bridging the gap between business and technology. Since SSI inception, proven, demonstrate and invent unique products, techniques and capabilities that far and uniquely distinguish us from other software provider as we are specialized in developing varies automated solutions in the steel plant and other Industries. "
              : "Special Software (India) Pvt. Ltd., well known as SSI is a turnkey software and business solution provider. Established in xxxxxxx to steer customers through the next generation of business innovation powered by technology with state-of-the-art business automation, software development and consultation ....."}
          </p>
          {!showFullContent && (
            <button className="secondary-button animate" onClick={handleOrderNowClick}>
              Learn More <FiArrowRight />
            </button>
          )}
        </div>
        <div className={`home-image-section animate ${showFullContent ? 'fade-out' : ''}`}>
          <img src={Office} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
