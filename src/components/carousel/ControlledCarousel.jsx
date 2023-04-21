import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Overkill from '../../assets/images/Overkill.webp';
import Exodus from '../../assets/images/Exodus.webp';
import Immortal from '../../assets/images/Immortal.webp';
import Fangels from '../../assets/images/Fangels.webp';
import ScarSymmetry from '../../assets/images/ScarSymmetry.webp';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Overkill}
            alt="First slide"
          />          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Exodus}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Immortal}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Fangels}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ScarSymmetry}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
