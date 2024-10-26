import React, { useState } from "react";
import Mission from "../Assets/Mission2.PNG";
import Vision from "../Assets/Vision3.PNG";
import Values from "../Assets/Values2.PNG";
import Strength from "../Assets/Strength2.PNG";
import Staff from "../Assets/Staff2.PNG";
// import "../styles/Work.css"; // Make sure to import or create a CSS file for styling

const Work = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);

  const workInfoData = [
    {
      image: Mission,
      title: "Our Mission",
      text: "Develop cutting-edge software through innovation, delivering cost-effective solutions that enhance client returns and productivity. Aim to be the preferred service provider by surpassing competition in quality, efficiency, and service diversity",
    },
    {
      image: Vision,
      title: "Our Vision",
      text: "Establish a reputation as an innovative IT solution provider, emphasizing efficiency and a shift from hard work to a smart work culture. Deliver excellence to clients through optimal, innovative, and reliable solutions and services.",
    },
    {
      image: Values,
      title: "Our Values",
      text: "We prioritize client partnerships, delivering tailored solutions with commitment and accountability. Guided by integrity and transparency, we foster innovation and embrace change. Our people, our greatest asset, are invested in for motivation and teamwork.",
    },
    {
      image: Strength,
      title: "Our Strength",
      text: "Deliver secure, scalable applications for business success. Ensure client satisfaction by understanding and addressing needs promptly. Assure quality through high-quality deliverables and continuous improvement. Foster a learning environment, train employees on state-of-the-art technologies, and adopt international best practices.",
    },
    {
      image: Staff,
      title: "Our Team",
      text: "SSI is driven by a skilled team of consultants, engineers, developers, and executives using the latest managerial and IT tools. Operating 24/7, we ensure timely delivery of applications, hardware, networking, and IT infrastructure support with the highest quality.",
    },
    // Add more data as needed
  ];

  const handleTitleClick = (title) => {
    setSelectedTitle(selectedTitle === title ? null : title);
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How We Work</h1>
        <p className="primary-text">
        We excel in delivering advanced IT solutions with a focus on client satisfaction. 
        Our committed team leverages state-of-the-art technologies, ensuring timely, 
        high-quality services. Dedicated to innovation, we foster continuous learning, 
        striving for excellence in End-to-End IT solutions and adhering to international 
        best practices.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img className="zoom" src={data.image} alt="" />
            </div>
            <h2 onClick={() => handleTitleClick(data.title)}>{data.title}</h2>
            {selectedTitle === data.title && <p>{data.text}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

