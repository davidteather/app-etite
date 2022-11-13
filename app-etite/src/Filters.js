import React, { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import './Filters.css';

function Filter(props) {
  const [data, setData] = useState(props.def)
  return (
    <div class="slider">
      <input
        type="range"
        min={props.min}
        max={props.max}
        defaultValue={props.def}
        class="slider"
        id="myRange"
        onChange={(e, val) => props.setData(e.target.value)}
      />
    </div>);
}

function Filters() {
  const [visible, setVisible] = useState(false);
  const [stars, setStars] = useState(1);
  const [distance, setDistance] = useState(20);
  const [price, setPrice] = useState(50);

  const flipVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className={"dropdown " + (visible ? "active" : "inactive")}>
      <div className="filterContainer">
        <div class="filter">
          <Filter min="1" max="5" def="1" setData={setStars} />
          Minimum Stars: {stars}
        </div>
        <div class="filter">
          <Filter min="1" max="20" def="20" setData={setDistance} />
          Max Distance: {distance}
        </div>
        <div class="filter">
        <Filter min="5" max="60" def="50" setData={setPrice} />
          Max Price: {price}
        </div>
        <div class="filter">
          <Filter min="1" max="5" def="1" setData={setStars} />
          Minimum Stars: {stars}
        </div>
      </div>
      <button onClick={() => { flipVisible() }}>
        <AiOutlineArrowDown />
      </button>
    </div>
  );
}

export default Filters;
