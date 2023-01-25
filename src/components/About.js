import React from "react";
import ImageSlider from "./ImageSlider";
import AboutCSS from "./About.module.css";

const About = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "Crypto" },
    { url: "http://localhost:3000/image-2.jpg", title: "Bitcoin" },
    { url: "http://localhost:3000/image-3.jpg", title: "Etherum" },
    { url: "http://localhost:3000/image-4.jpg", title: "Tether" },
    { url: "http://localhost:3000/image-5.jpg", title: "BNB" },
  ];

  return (
    <div className={AboutCSS.AboutPage}>
      <h1>About CryptoChecker</h1>
      <p>
        CryptoChecker is dedicated to providing real-time and accurate
        information on the prices of various cryptocurrencies. It aims to make
        it easy for users to keep track of their favorite digital assets and
        make informed decisions on their investments.
      </p>
      <p>
        CryptoChecker gathers data from multiple reputable sources to ensure the
        information displayed on our site is up-to-date and reliable.
      </p>
      <p>
        Thank you for choosing CryptoChecker for your cryptocurrency information
        needs.
      </p>
      <div className={AboutCSS.containerStyles}>
        <ImageSlider slides={slides}></ImageSlider>
      </div>
    </div>
  );
};

export default About;
