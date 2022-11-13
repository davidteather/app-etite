import React, { useState } from 'react';
import "../styles/imageslides.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


function ImageSlides(props) {
  // TODO:
  function retryRequest (url) {
    fetch(url, {mode: "no-cors"}).then(r=>r.blob()).then(d=> this.src=window.URL.createObjectURL(d));
  }
  return (
    <div className="image-slides">
      <div className="image-container">
        <img
          src={props.restaurant.thumbnail}
          onError={retryRequest(props.restaurant.thumbnail)}
          alt={props.restaurant.description}
          onClick={props.newGenerator}
        />
      </div>
    </div>
  );
}

export default ImageSlides;
