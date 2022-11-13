import ImageSlides from "./components/ImageSlides";
import Filters from "./Filters";
import { useState } from "react";
export default function RestaurantWrapper(props) {
  var restaurant = props.restaurant;
  const [stars, setStars] = useState(1);
  const [distance, setDistance] = useState(20);
  const [price, setPrice] = useState(50);
  return (
    <>
      <Filters stars={stars} setStars={setStars} distance={distance} setDistance={setDistance} price={price} setPrice={setPrice}/>
      <ImageSlides restaurant={restaurant} newGenerator={props.newGenerator} />
      {restaurant.title}
    </>
  );
};