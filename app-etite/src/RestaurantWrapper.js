import ImageSlides from "./components/ImageSlides";
import Filters from "./Filters";
import { useState } from "react";
export default function RestaurantWrapper(props) {
  var restaurant = props.restaurant;
  return (
    <>
      <Filters setFilters={props.setFilters} />
      <ImageSlides restaurant={restaurant} newGenerator={props.newGenerator} />
      {restaurant.title}
    </>
  );
};