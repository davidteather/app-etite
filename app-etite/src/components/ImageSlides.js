import React, { useState, useEffect } from 'react';
import "../styles/imageslides.css"
import { FcInfo } from "react-icons/fc"

// function DetailsMenu(props) {
//   const [open, setOpen] = useState(true);

//   const menu = () => {
//     setOpen(!open);
//   }
//   if (open) {
//     return (
//       <div class="details-menu">
//         <button onClick={menu}><FcInfo /></button>

//       </div>
//     )
//   } else {
//     return (
//       <>
//         <div class="details-menu">
//           <button onClick={menu}><FcInfo /></button>

//         </div>
//         <div class="open">
//           <h2>{props.restaurant.title} {props.restaurant.price}</h2>
//           <h4>Stars: {props.restaurant.rating}</h4>
//           <h4>{props.restaurant.address}</h4>
//           <a href={props.restaurant.website}><p>Website</p></a>
//         </div>

//       </>
//     );
//   }
// }

function ImageSlides(props) {
  function retryRequest(url) {
    if (document.getElementById('image_loader') !== null) {
      document.getElementById('image_loader').src="/ffffff.png"
      setTimeout(() => {document.getElementById('image_loader').src=url}, 10)
    }
  }

  const [oldRestaurant, setOldRestaurant] = useState(props.restaurant);

  useEffect(() => {
    return(() => {
      setOldRestaurant(props.restaurant);
    })
  }, [props])

  return (
    <><div className="image-slides">
      <div class="image-container">
        <div key={props.restaurant.description} className='current'>
          <img
            id="image_loader"
            src={props.restaurant.thumbnail}
            //onError={retryRequest(props.restaurant.thumbnail)}
            onError={() => retryRequest(props.restaurant.thumbnail)}
            alt={props.restaurant.description}
            onClick={props.newGenerator}
          />
          {/* <DetailsMenu restaurant={props.restaurant}/> */}
        </div>
        <div key={oldRestaurant.title} className='old'>
          <img
            id="image_loader"
            src={oldRestaurant.thumbnail}
            //onError={retryRequest(props.restaurant.thumbnail)}
            onError={() => retryRequest(oldRestaurant.thumbnail)}
            alt={oldRestaurant.description}
          />
          {/* <DetailsMenu restaurant={props.restaurant}/> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default ImageSlides;
