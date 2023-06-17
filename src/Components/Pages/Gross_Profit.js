import React, { useState } from 'react'
import Chart from '../Chart';

export const Gross_Profit = () => {
    const [Gross_Profit] = useState([1262.81, 1957.82,	872.76,	566.41,	428.13,	375.83,	299.36,	257.7,	248.12,	197.34]);

    return (
        <div>
            <Chart data={Gross_Profit}/>
        </div>
  )
}
