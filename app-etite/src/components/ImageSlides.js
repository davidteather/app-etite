import React, { useState } from 'react';
import "../styles/imageslides.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


function ImageSlides(props) {
  return (
    <div className="image-slides">
      <div class="image-container">
        <img
          src={props.restaurant.thumbnail}
          alt="img"
          onClick={props.newGenerator}
        />
      </div>
    </div>
  );
}

export default ImageSlides;
