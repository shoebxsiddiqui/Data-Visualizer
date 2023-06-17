import React, { useState } from 'react'
import Chart from '../Chart';

export const Selling_General_Admin = () => {
    const [Selling_General_Admin] = useState([716.19,	533.84,	373.93,	261.1,	167.23,	139.25,	125.78,	104.32,	92.35,	84.3]);

    return (
        <div>
            <Chart data={Selling_General_Admin}/>
        </div>
  )
}