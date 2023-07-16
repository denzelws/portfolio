import React, { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";

import { images } from '../../variables/images'
import Image from "next/image";

const AutoPlay: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const sliderElement = sliderRef.current;

    const autoplay = () => {
      if (sliderElement) {
        sliderElement.slickNext();
      }
    };

    const intervalId = setInterval(autoplay);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3500,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings} className="custom-slider">
        {images.map((imageUrl, index) => (
            <Image key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-20 h-24 object-contain"
              width={300} 
              height={200} 
            />
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlay;
