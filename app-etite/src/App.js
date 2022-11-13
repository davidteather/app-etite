import logo from './logo.svg';
import './App.css';
import Filters from './Filters';
import ImageSlides from './components/ImageSlides';
import RestaurantData from './data.json';
import RestaurantWrapper from './RestaurantWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function getRandomRestaurant(location) {
  var RestaurantKeys = Object.keys(RestaurantData);
  var randomKey = RestaurantKeys[Math.floor(Math.random() * RestaurantKeys.length)];
  return RestaurantData[randomKey];
}

function App() {
  const location = navigator.geolocation.getCurrentPosition(function (pos) {
    console.log(pos)
  })

  function newRestaurantGenerator() {
    setRestaurant(getRandomRestaurant(location));
  }
  const [restaurant, setRestaurant] = useState(getRandomRestaurant(location));
  return (
    <div className="App">
      <Filters />
      <RestaurantWrapper restaurant={restaurant} newGenerator={newRestaurantGenerator} />
    </div>
  );
}

export default App;
