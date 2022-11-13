import React, { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import './Filters.css';
//import ReactSlider from "react-slider";

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
        onChange={(e, val) => props.setData(e.target.value)}
      />
    </div>);
}

function Filters() {
  const [visible, setVisible] = useState(false);
  const [stars, setStars] = useState(1);

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
          <Filter min="1" max="5" def="1" setData={setStars} />
          Minimum Stars: {stars}
        </div>
        <div class="filter">
          <Filter min="1" max="5" def="1" setData={setStars} />
          Minimum Stars: {stars}
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
