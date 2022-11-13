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
        <h2>{props.restaurant.title} {props.restaurant.price}</h2>
        <Rating initialValue={oldRestaurant.rating} isHalf={true} readonly />
        {/* <h4>{props.restaurant.address}</h4>
        <a href={props.restaurant.website}><p>Website</p></a> */}
      </div>
      <div key={props.restaurant.address} className='old'>
        <h2>{oldRestaurant.title} {oldRestaurant.price}</h2>
        <Rating initialValue={oldRestaurant.rating} allowFraction readonly />
        {/* <h4>{oldRestaurant.address}</h4>
        <a href={oldRestaurant.website}><p>Website</p></a> */}
      </div>
    </div>
  );
}

export default RestaurantDescription;