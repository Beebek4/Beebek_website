"use client";
import React, { useState } from 'react';

const ImageSwap = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='mx-auto flex'>
      <img
        className=' h-80 w-80 object-cover rounded-3xl mx-auto'
        src={isHovered ? "/facepic2.jpg" : "/facepic.jpg"}
        alt="Image"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
    </div>
  );
};

export default ImageSwap;
