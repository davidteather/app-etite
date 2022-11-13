import React, { useState, useEffect, useRef } from 'react'
import '../styles/RestaurantDescription.css';
import { Rating } from 'react-simple-star-rating'


function RestaurantDescription(props) {

  const [oldRestaurant, setOldResataurant] = useState(props.restaurant);

  useEffect(() => {
    return(() => {
      setOldResataurant(props.restaurant);
    })
  }, [props])

  return (
    <div className='description'>
      <div key={props.restaurant.title} className='current'>
        <h2>
          {props.restaurant.title}
        </h2>
        <h3>
          <Rating initialValue={Math.round(props.restaurant.rating)} isHalf={true} readonly />
          {/* {props.restaurant.reviews} reviews */}
        </h3>
        <h4>
          {/* {props.restaurant.price} */}
          {props.restaurant.type}
        </h4>
        <h5>
          {props.restaurant.address}
        </h5>
        <a href={props.restaurant.website}><p>Website</p></a>
      </div>
      <div key={props.restaurant.address} className='old'>
      <h2>
          {oldRestaurant.title}
        </h2>
        <h3>
          <Rating initialValue={Math.round(oldRestaurant.rating)} isHalf={true} readonly />
          {/* {props.restaurant.reviews} reviews */}
        </h3>
        <h4>
          {/* {props.restaurant.price} */}
          {oldRestaurant.type}
        </h4>
        <h5>
          {oldRestaurant.address}
        </h5>
        <a href={oldRestaurant.website}><p>Website</p></a>
      </div>
    </div>
  );
}

export default RestaurantDescription;