import React, { useState } from 'react';
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import './NumberCounter.css'
import { NavLink } from 'react-router-dom';
function NumberCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
  if (count < 10) {
    setCount(count + 1);
  }
}
const decrement = () => {
  if (count > 0) {
    setCount(count - 1);
  }
}
  return (
<>
<NavLink to="/stack">
<button className="btn btn-outline-warning m-1"><BsArrowLeft /></button>
</NavLink>
      <div className=' mx-auto level-container'>
      <button className="btn btn-outline-warning m-1" onClick={decrement}><BsArrowLeft /></button>
      <span className='text-light fs-3 level_border'>{count}</span>
      <button className="btn btn-outline-warning m-1" onClick={increment}><BsArrowRight /></button>

    </div>
</>
  );
}

export default NumberCounter;
