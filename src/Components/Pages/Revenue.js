import React, { useState } from 'react'
import Chart from '../Chart';

export const Revenue = () => {
    const [Revenue] = useState([1574.37,	2175.54,	916.71,	654.,	482.25,	418.15,	336.8, 286.76]);

    return (
        <div>
            <Chart data={Revenue}/>
        </div>
  )
}
