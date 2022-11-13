import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './Filters';
import ImageSlides from './components/ImageSlides';
import RestaurantData from './data.json';
import RestaurantWrapper from './RestaurantWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { shuffle, distance } from './Helper';

function App() {
  // Ask for location & set default position to Madison Wisconsin
  var [currentPosition, setCurrentPosition] = useState({ lat: 43.074761, lon: -89.3837613 });
  
  // State for the filter
  const [filterValue, setFilters] = useState({ stars: 3, distance: 5, price: 2 });



  // Need to timeout before loading location data
  setTimeout(() => {
    document.querySelector('#image_loader').addEventListener('click', () => {
      navigator.geolocation.getCurrentPosition(function (pos) {
        setCurrentPosition({
          lon: pos.coords.longitude,
          lat: pos.coords.latitude
        })
      })
    })
  }, 1000)


  function restaurant_filter(restaurant) {
    // Returns true if restaurant matches criteria
    if (restaurant == undefined) {
      return false;
    }
    // Filter by distance
    if (distance(currentPosition.lat, currentPosition.lon, restaurant.gps_coordinates.latitude, restaurant.gps_coordinates.longitude) > filterValue.distance) {
      return false;
    }

    // Filter by price
    var price_val = 0;
    switch (restaurant.price) {
      case "$":
        price_val = 1;
        break;
      case "$$":
        price_val = 2;
        break;
      case "$$$":
        price_val = 3;
        break;
      default:
        break
    }
    if (price_val > filterValue.price) {
      return false;
    }

    // Filter by stars
    if (restaurant.rating < filterValue.stars) {
      return false;
    }
    return true;
  }

  const [FullRestaurantList, setFullRestaurantList] = useState(shuffle(Object.values(RestaurantData)));
  const [FilteredRestaurants, setFilteredRestaurants] = useState(FullRestaurantList.filter(restaurant_filter))
  const [RestaurantIndex, setRestaurantIndex] = useState(0)

  //var FullRestaurantList = shuffle(Object.values(RestaurantData))
  //var FilteredRestaurants = FullRestaurantList.filter(restaurant_filter) // TODO: Make func to filter restaurants by criteria
  //var RestaurantIndex = 0 // Should be updated on filter & moduloed to loop back to beginning
  useEffect(() => {
    setFilteredRestaurants(FullRestaurantList.filter(restaurant_filter)) // TODO: Make func to filter restaurants by criteria
    setRestaurantIndex(0) // Should be updated on filter & moduloed to loop back to beginning
    newRestaurantGenerator()
  }, [filterValue])

  useEffect(() => {
    var restaurant = FilteredRestaurants[RestaurantIndex];
    if (restaurant_filter(restaurant)) {
      console.log(restaurant)
      setRestaurant(restaurant)
    } else {
      setRestaurantIndex((RestaurantIndex + 1) % FilteredRestaurants.length);
    }
  }, [RestaurantIndex])

  console.log(RestaurantIndex)
  const getRandomRestaurant = () => {
    setRestaurantIndex((RestaurantIndex + 1) % FilteredRestaurants.length);
    
  }
  const [restaurant, setRestaurant] = useState(FilteredRestaurants[RestaurantIndex]);

  const newRestaurantGenerator = () => {
    getRandomRestaurant();
  }
  const onKey = (e) => {
    if (e.keyCode === 32) {
      newRestaurantGenerator();
    }
  }
  return (
    <div className="App" tabIndex="0" onKeyDown={onKey}>
      <RestaurantWrapper setFilters={setFilters} restaurant={restaurant} newGenerator={newRestaurantGenerator} />
    </div>
  );
}

export default App;
