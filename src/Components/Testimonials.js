import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
  {
    text:
      "SSI is a game-changer in the IT industry. Their expert team's innovative solutions and proactive approach have significantly enhanced our business operations. From impeccable communication to cutting-edge technology implementation, they have exceeded our expectations. I highly recommend their service for anyone seeking reliable and forward-thinking IT services.",
    stars: 5,
    name: "Rohan Arya",
  },
  {
    text: " ",
    stars: 4,
    name: "Jane Doe",
  },
  // Add more testimonials as needed
];

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Testimonial = () => {
  const [shuffledTestimonials, setShuffledTestimonials] = useState(() =>
    shuffleArray(testimonials)
  );
  const [index, setIndex] = useState(0);

  const shakeAnimation = useSpring({
    transform: `translate(${index % 2 === 0 ? 5 : -5}px, 0)`,
  });

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % shuffledTestimonials.length);
  };

  return (
    <div className="work-section-wrapper" onClick={nextTestimonial}>
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Discover what our clients are saying about their experiences with us.
          Read firsthand testimonials highlighting the value we bring and the
          satisfaction our services provide
        </p>
      </div>
      <div className="testimonial-section">
        <div className="testimonial-section-bottom">
          <animated.img
            style={shakeAnimation}
            src={ProfilePic}
            alt=""
          />
          <p>{shuffledTestimonials[index].text}</p>
          <div className="testimonials-stars-container">
            {Array.from({ length: shuffledTestimonials[index].stars }, (_, i) => (
              <AiFillStar key={i} />
            ))}
          </div>
          <h2>{shuffledTestimonials[index].name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
