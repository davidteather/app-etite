import React, { useState } from 'react';
import "../styles/imageslides.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


function ImageSlides(props) {
  function retryRequest(url) {
    if (document.getElementById('image_loader') !== null) {
      document.getElementById('image_loader').src="/ffffff.png"
      setTimeout(() => {document.getElementById('image_loader').src=url}, 10)
    }
  }

  return (
    <div className="image-slides">
      <div className="image-container">
        <img
          id="image_loader"
          src={props.restaurant.thumbnail}
          //onError={retryRequest(props.restaurant.thumbnail)}
          onError={() => retryRequest(props.restaurant.thumbnail)}
          alt={props.restaurant.description}
          onClick={props.newGenerator}
        />
      </div>
    </div>
  );
}

export default ImageSlides;
