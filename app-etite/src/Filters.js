import React, { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import './Filters.css';

function Filters() {
  const [visible, setVisible] = useState(false);

  const flipVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className={"filters " + (visible? "active" : "inactive")}>
      <ul>
        <li>
          Option 1
        </li>
        <li>
          Option 2
        </li>
        <li>
          Option 3
        </li>
      </ul>
      <button onClick={() => { flipVisible() }}>
        <AiOutlineArrowDown />
      </button>
    </div>
  );
}

export default Filters;
