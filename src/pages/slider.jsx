import React from 'react';
import Sample from './Sample';

const Slider = ({ images }) =>{
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 18 }}>
        {images.map((val) => (
          <Sample key={val.id} image={val.image} po={val.po} />
        ))}
      </div>
    </div>
  );
}

export default Slider;

