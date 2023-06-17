import React, { useState } from 'react'
import Chart from '../Chart';

export const Cost_of_Revenue = () => {
        const [Cost_of_Revenue] = useState([311.57,	217.72,	43.95,	88.29,	54.12,	42.32,	37.44,	29.06,	21.14,	13.47]);

    return (
        <div>
            <Chart data={Cost_of_Revenue}/>
        </div>
  )
}