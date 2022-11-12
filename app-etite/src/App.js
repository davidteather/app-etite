import logo from './logo.svg';
import './App.css';
import Filters from './Filters';
import ImageSlides from './ImageSlides';
import RestaurantData from './data.json';
import RestaurantWrapper from './RestaurantWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';

function getRandomRestaurant() {
  var RestaurantKeys = Object.keys(RestaurantData);
  var randomKey = RestaurantKeys[Math.floor(Math.random() * RestaurantKeys.length)];
  return RestaurantData[randomKey];
}

function App() {
  return (
    <div className="App">
      <Filters/>
      <RestaurantWrapper restaurant={getRandomRestaurant()}/>
      <ImageSlides/>
      {console.log(RestaurantData)}
      {Object.keys(RestaurantData).forEach(key => {
        return <div>RestaurantData[key].place_id</div>
      })}
    </div>
  );
}

export default App;
