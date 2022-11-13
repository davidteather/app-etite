import React, { useEffect, useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import './Filters.css';

function Filter(props) {
  const [data, setData] = useState(props.def)
  return (
    <div className="slider">
      <input
        type="range"
        min={props.min}
        max={props.max}
        defaultValue={props.def}
        className="slider"
        id="myRange"
        onChange={(e, val) => props.setData(props.filterCategory, e.target.value, props.setFilters)}
      />
    </div>);
}

function Filters(props) {
  const [visible, setVisible] = useState(false);
  const [stars, setStars] = useState(3);
  const [distance, setDistance] = useState(5);
  const [price, setPrice] = useState(2);
  var setFilters = props.setFilters

  const flipVisible = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    setFilters({ stars, distance, price })
  }, [stars, distance, price])

  const updateFilter = (type, value, setFilters) => {
    switch (type) {
      case 'stars':
        setStars(value);
        break;
      case 'distance':
        setDistance(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        break;
    }
  }

  // TODO: Convert the max price to be low/medium/high pricing since we only have $/$$/$$$ for now
  return (
    <div className={"dropdown " + (visible ? "active" : "inactive")}>
      <div className="filterContainer">
        <div class="filter">
          <Filter min="1" max="5" def="3" filterCategory="stars" setFilters={props.setFilters} setData={updateFilter} />
          Minimum Rating: {stars}
        </div>
        <div class="filter">
        <Filter min="1" max="4" def="2" filterCategory="price" setFilters={props.setFilters} setData={updateFilter} />
          Max Price: {price}
        </div>
        <div class="filter">
          <Filter min="1" max="50" def="5" filterCategory="distance" setFilters={props.setFilters} setData={updateFilter} />
          Max Distance: {distance} miles
        </div>
      </div>
      <button onClick={() => { flipVisible() }}>
        <AiOutlineArrowDown />
      </button>
    </div>
  );
}

export default Filters;
