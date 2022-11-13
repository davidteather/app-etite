import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './Filters';
import ImageSlides from './components/ImageSlides';
import RestaurantData from './data.json';
import RestaurantWrapper from './RestaurantWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function getRandomRestaurant(location) {
  var RestaurantKeys = Object.keys(RestaurantData);
  while (true) {
    var randomKey = RestaurantKeys[Math.floor(Math.random() * RestaurantKeys.length)];
    var restaurant = RestaurantData[randomKey];
    if (restaurant.thumbnail) {
      return restaurant;
    }
  }
}

function App() {
  const location = navigator.geolocation.getCurrentPosition(function (pos) {
    console.log(pos)
  })

  function newRestaurantGenerator() {
    setRestaurant(getRandomRestaurant(location));
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
