import React, { useState } from 'react';
import "../styles/imageslides.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


const slideImages = [
  {
    url: 'https://media-cdn.tripadvisor.com/media/photo-o/06/6e/4f/17/cannelicchi-alla-di-scala.jpg',
    caption: 'Image 1'
  },
  {
    url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/37/4e/4b/chateaubriand-potatoes.jpg',
    caption: 'Image 2'
  },
  {
    url: 'https://media-cdn.tripadvisor.com/media/photo-o/07/ac/51/c6/capesante-e-gamberoni.jpg',
    caption: 'Image 3'
  },
];

function ImageSlides() {
  const [imgSrc, setImgSrc] = useState("https://media-cdn.tripadvisor.com/media/photo-o/05/37/4e/4b/chateaubriand-potatoes.jpg");
  const [index, setIndex] = useState(0);


  const goForward = () => {
    setIndex((index + 1) % 3)
    setImgSrc(slideImages[index].url)

  }
  return (
    <div className="image-slides">
      <div>
        <button className='control-left'>
          <IoIosArrowBack />
        </button>
      </div>
      <div class="image-container">
        <img
          src={imgSrc}
          alt="img"
        />
      </div>
      <div>
        <button className='control-right' onClick={goForward}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default ImageSlides;
