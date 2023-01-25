import { useState } from "react";
import ImageSliderCSS from "./ImageSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={ImageSliderCSS.sliderStyles}>
      <div className={ImageSliderCSS.leftArrowStyle} onClick={goToPrevious}>
        ❰
      </div>
      <div className={ImageSliderCSS.rightArrowStyle} onClick={goToNext}>
        ❱
      </div>
      <div className={ImageSliderCSS.slideStyles} style={slideStyles}></div>
      <div className={ImageSliderCSS.dotsContainer}>
        {slides.map((slideIndex, index) => (
          <div
            key={slideIndex}
            className={ImageSliderCSS.dotStyle}
            onClick={() => goToSlide(index)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
