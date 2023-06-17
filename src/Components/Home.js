import React, { useState } from 'react'
import Chart from './Chart';

const Home = () => {
  const [one] = useState([10, 25, 30, 40, 25, 60, 5, 7, 1, -1, -9]);


  return (
    <div className='container'>
        <button onClick={() => Chart(one)}>One</button>
    </div>
  )
}

export default Home