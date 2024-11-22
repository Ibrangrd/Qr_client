import React from 'react';
import Sample from './Sample';
import "aos/dist/aos.css"

const Slider = ({ images }) =>{
  return (
    <div className="banner"  data-aos="zoom-out">
      <div className="slider" style={{ "--quantity": 16 }}>
        {images.map((val) => (
          <Sample key={val.id} image={val.image} po={val.po} />
        ))}
      </div>
    </div>
  );
}

export default Slider;

