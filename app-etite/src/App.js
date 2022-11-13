import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './Filters';
import ImageSlides from './components/ImageSlides';
import RestaurantData from './data.json';
import RestaurantWrapper from './RestaurantWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {shuffle, distance} from './Helper';

function App() {
  // Ask for location & set default position to Madison Wisconsin
  var [currentPosition, setCurrentPosition] = useState({lat: 43.074761, lon: -89.3837613});
  navigator.geolocation.getCurrentPosition(function (pos) {
    setCurrentPosition({
      lon: pos.coords.longitude,
      lat: pos.coords.latitude
    })
  })

  function restaurant_filter(restaurant) {
    // Returns true if restaurant matches criteria
    if (restaurant == undefined) {
      return false;
    }
    var max_distance = 5; // miles
    // Filter by distance
    if (distance(currentPosition.lat, currentPosition.lon, restaurant.gps_coordinates.latitude, restaurant.gps_coordinates.longitude) > max_distance) {
      return false;
    }
    return true;
  }

  var FullRestaurantList = shuffle(Object.values(RestaurantData))
  var FilteredRestaurants = FullRestaurantList.filter(restaurant_filter) // TODO: Make func to filter restaurants by criteria
  var RestaurantIndex = 0 // Should be updated on filter & moduloed to loop back to beginning

  function getRandomRestaurant() {
    RestaurantIndex = (RestaurantIndex + 1) % FilteredRestaurants.length;
    var restaurant = FilteredRestaurants[RestaurantIndex];
    if (restaurant_filter(restaurant)) {
      return restaurant;
    } else {
      return getRandomRestaurant();
    }
  }
  function newRestaurantGenerator() {
    setRestaurant(getRandomRestaurant());
  }
  function onKey(e) {
    if (e.keyCode === 32) {
      newRestaurantGenerator();
    }
  }
  const [restaurant, setRestaurant] = useState(getRandomRestaurant());
  return (
    <div className="App" tabIndex="0" onKeyDown={onKey}>
      <Filters/>
      <RestaurantWrapper restaurant={restaurant} newGenerator={newRestaurantGenerator}/>
    </div>
  );
}

export default App;
