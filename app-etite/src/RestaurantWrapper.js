import ImageSlides from "./components/ImageSlides";
import Filters from "./components/Filters";
import { useState } from "react";
import RestaurantDescription from "./components/RestaurantDescription";
export default function RestaurantWrapper(props) {
  var restaurant = props.restaurant;
  return (
    <>
      <Filters setFilters={props.setFilters} />
      <ImageSlides restaurant={restaurant} newGenerator={props.newGenerator} />
      <RestaurantDescription restaurant={restaurant} restaurantIndex={props.restaurantIndex} />
    </>
  );
};